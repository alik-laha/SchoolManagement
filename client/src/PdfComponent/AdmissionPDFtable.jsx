import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import AdmissionPDFtableRow from "./AdmissionPDFtableRow";

const borderColor = "#00519C";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#3778C2"
  },
  container: {
    flexDirection: "row",
    borderBottomColor: "#00519C",
    backgroundColor: "#00519C",
    color: "#fff",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1
  },
  description: {
    width: "60%",
    borderRightColor: borderColor,
    borderRightWidth: 1
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1
  },
  amount: {
    width: "15%"
  }
});

const AdmissionPDFtable = ({ invoice }) => (
  <View style={styles.tableContainer}>
    {/* Invoice Table Header */}
    <View style={styles.container}>
      <Text style={styles.description}>Descriptions</Text>
      <Text style={styles.qty}>Details</Text>
      
    </View>
    {/* Invoice Table Rows */}
    <AdmissionPDFtableRow items={invoice.items} />
  </View>
);

export default AdmissionPDFtable;