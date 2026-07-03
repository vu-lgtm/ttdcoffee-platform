import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import { createElement, type ReactElement } from "react";
import { getCustomerById } from "../../../../admin/customers/customer";
import { QuotePdfDocument } from "../../../../admin/quotes/QuotePdfDocument";
import { getQuoteById } from "../../../../admin/quotes/quote";
import { isAdminRequest } from "../../../../lib/admin-auth";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const quote = await getQuoteById(Number(id));

  if (!quote) {
    return NextResponse.json(
      { success: false, message: "Quote not found" },
      { status: 404 }
    );
  }

  const customer = await getCustomerById(quote.customer_id);

  if (!customer) {
    return NextResponse.json(
      { success: false, message: "Customer not found" },
      { status: 404 }
    );
  }

  const buffer = await renderToBuffer(
    createElement(QuotePdfDocument, { quote, customer }) as ReactElement<DocumentProps>
  );

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="quote-${quote.id}.pdf"`,
    },
  });
}
