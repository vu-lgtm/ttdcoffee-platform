import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Customer } from "../customers/customer";
import type { Quote } from "./quote";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 11,
    color: "#1F1F1F",
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 32,
  },
  brand: {
    fontSize: 22,
    fontWeight: 700,
    color: "#5C3A21",
  },
  brandSub: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: "right",
  },
  meta: {
    fontSize: 10,
    color: "#666",
    textAlign: "right",
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 9,
    color: "#999",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },
  table: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#e0ddd3",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0ddd3",
  },
  tableRowLast: {
    flexDirection: "row",
  },
  tableHeaderCell: {
    flex: 1,
    padding: 8,
    fontSize: 9,
    fontWeight: 700,
    backgroundColor: "#f7f5ef",
    textTransform: "uppercase",
    color: "#5C3A21",
  },
  tableCell: {
    flex: 1,
    padding: 8,
  },
  terms: {
    fontSize: 10,
    color: "#444",
    lineHeight: 1.6,
  },
  signatureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  signatureBox: {
    width: 200,
    borderTopWidth: 1,
    borderTopColor: "#999",
    paddingTop: 6,
    fontSize: 9,
    color: "#666",
    textAlign: "center",
  },
});

function formatMoney(amount: number, currency: string) {
  return `${amount.toLocaleString("en-US")} ${currency}`;
}

export function QuotePdfDocument({
  quote,
  customer,
}: {
  quote: Quote;
  customer: Customer;
}) {
  const total = quote.unit_price;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>☕ TTD Coffee</Text>
            <Text style={styles.brandSub}>From Vietnam to the World</Text>
            <Text style={styles.brandSub}>ttdcoffee.com</Text>
          </View>
          <View>
            <Text style={styles.title}>QUOTATION</Text>
            <Text style={styles.meta}>Quote #{quote.id}</Text>
            <Text style={styles.meta}>
              Date: {new Date(quote.created_at).toLocaleDateString("en-US")}
            </Text>
            {quote.valid_until && (
              <Text style={styles.meta}>
                Valid until:{" "}
                {new Date(quote.valid_until).toLocaleDateString("en-US")}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Bill To</Text>
          <Text>{customer.name}</Text>
          {customer.company && <Text>{customer.company}</Text>}
          {customer.email && <Text>{customer.email}</Text>}
          {customer.phone && <Text>{customer.phone}</Text>}
          {customer.country && <Text>{customer.country}</Text>}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Product</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeaderCell}>Product</Text>
              <Text style={styles.tableHeaderCell}>Quantity</Text>
              <Text style={styles.tableHeaderCell}>Incoterm</Text>
              <Text style={styles.tableHeaderCell}>Unit Price</Text>
            </View>
            <View style={styles.tableRowLast}>
              <Text style={styles.tableCell}>{quote.product}</Text>
              <Text style={styles.tableCell}>{quote.quantity || "—"}</Text>
              <Text style={styles.tableCell}>{quote.incoterm}</Text>
              <Text style={styles.tableCell}>
                {formatMoney(total, quote.currency)}
              </Text>
            </View>
          </View>
        </View>

        {quote.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Notes</Text>
            <Text style={styles.terms}>{quote.notes}</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Terms & Conditions</Text>
          <Text style={styles.terms}>
            Price is quoted on an {quote.incoterm} basis and excludes any
            duties or taxes not stated above. Payment terms and shipment
            schedule to be confirmed upon order. This quotation is valid
            until the date stated above unless otherwise agreed in writing.
          </Text>
        </View>

        <View style={styles.signatureRow}>
          <Text style={styles.signatureBox}>Buyer Signature</Text>
          <Text style={styles.signatureBox}>TTD Coffee</Text>
        </View>
      </Page>
    </Document>
  );
}
