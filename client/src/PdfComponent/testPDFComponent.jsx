import React from "react";
import { Document, Page, Text, View,StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      fontFamily: "Helvetica",
      fontSize: 11,
      paddingTop: 30,
      paddingLeft: 50,
      paddingRight: 50,
      lineHeight: 1.5,
      flexDirection: "column"
    },
    logo: {
      width: 84,
      height: 70
    },
    mainHeader: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center"
    }
  });

const testComponent = ({ data }) => {
    console.log(data)
  return (
    <Document>
        <Page>
        <View style={styles.mainHeader}>
            <Text> {data}</Text>
            </View>
          
        </Page>
      </Document>

  );
};

export default testComponent;