import React from "react";
import { StyleSheet, Image, Text, View,Page } from "@react-pdf/renderer";
import AdmissionPDFdesc from "./AdmissionPDFdesc";
import AdmissionPDFtable from "./AdmissionPDFtable";
import logo from '../component/Home/logo_ahm.jpg'

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

const AdmissionPDFMainComponent = () => {
  return (
    <Page><View>
    <View style={styles.mainHeader}>
      <Image
        style={styles.logo}
        src={logo} alt='logo image' height ={40} width={40}
      />
      <Text>Registration No. : {invoice.fullname}!</Text>
    </View>
    <AdmissionPDFdesc invoice={invoice} />
    <AdmissionPDFtable invoice={invoice} />
  </View></Page>
    
    // //<Document>
    //     <Page>
    //        <Text>Hello, World!</Text>
    //     </Page>
    //   //</Document>
  );
};

export default AdmissionPDFMainComponent;