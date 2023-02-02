import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Input:{
        borderWidth:moderateScale(1),
        marginVertical:moderateVerticalScale(10),
        width:moderateScale(330),
        borderRadius:moderateScale(10)
    },
    Bottom:{
        borderWidth:moderateScale(1),
        marginVertical:moderateVerticalScale(20),
        width:moderateScale(230),
        borderRadius:moderateScale(10),
        height:moderateVerticalScale(50),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    },
    TextStyle:{
        color:'white',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    ImgStyle:{
     width:moderateScale(40),
     height:moderateVerticalScale(40)   
    },
    TextStyles:{
        color:'#000',
        padding:moderateScale(25)
    },
    Logo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    }
})

export default styles