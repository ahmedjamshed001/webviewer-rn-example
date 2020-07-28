/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import WebViewer from '@pdftron/webviewer';
// import WebViewer from './webviewer/ui/index.html';

const App = () => {
  const viewer = React.useRef(null);

  React.useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      viewer.current,
    ).then((instance) => {
      const {docViewer} = instance;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View ref={viewer} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
