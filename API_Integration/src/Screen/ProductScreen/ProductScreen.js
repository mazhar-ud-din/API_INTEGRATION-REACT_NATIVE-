import { StyleSheet, Text, View, FlatList,Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function ProductScreen({navigation}) {

  const [data, setData] = useState([])
const goToBack=()=>{
  navigation.goBack()
}
  useEffect(() => {
    FatchDat()
  }, [])

  const FatchDat = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res =>
        setData(res.products)
      ));
  }
  const renderItem = useCallback(({ item }) => {
    return (
      <>

        <View >
          <Image style={styles.imgStyle} source={{ uri: item.thumbnail }} />

          <View style={styles.FlatListStyle} >
            <View >
              <Text style={styles.TextStyle}>{item.brand}</Text>
              <Text style={styles.TextStyle}>{item.title}</Text>
              <Text style={styles.TextStyle}>Stock:{item.stock}</Text>
            </View>
            <View>
              <Text style={styles.TextStyle}>${item.price}</Text>
              <Text style={styles.TextStyle}>{item.discountPercentage}%</Text>
              <Text style={styles.TextStyle}>{item.rating}</Text>
            </View>
          </View>
          <Text style={{ textAlign: 'center', marginBottom: 10, color: '#000' }}>{item.description}</Text>

        </View>
      </>
    )
  }, [data])

  const keyExtractor = useCallback(() => { (item) => `${item.id}` }, [data])

  const ItemSeparatorComponent = useCallback(() => {
    return (<View style={{ marginBottom: 1 }} />)
  }, [])

  return (
    <View style={styles.container} >
      <View style={styles.HeaderStyle}>
       <TouchableOpacity onPress={goToBack}>
        <Text>goBack</Text>
       </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginVertical: 5 ,fontSize:25,fontWeight:'bold',color:'#000'}}>PRODUCTS</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 20

  },
  FlatListStyle: {
    flexDirection: 'row',
     justifyContent: 'space-between', 
     padding: 5 
  },
  imgStyle: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  TextStyle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000'
  },
  
})