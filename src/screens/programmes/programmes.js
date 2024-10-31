import React, { useState } from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const scale = width / 420;
import { Fab } from 'native-base';
import Menu from "./menu";






export default function Programmes() {
 
  const [items, setItems] = useState(Menu);
  const filterItem =(categoryItem) =>{
    const updatedItems = Menu.filter((curElem) => {
return curElem.category === categoryItem;

    });
setItems(updatedItems);    
  }

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Apparailes" />
        
  
        <ScrollView>


          <View
            style={{
              width: '100%', // adjust the width to your needs
              // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale,
              
              position: 'fixed',
              top: 0 * scale,
              left: 0 * scale,
            }}>
            <NativeBaseProvider>
             


           
              <View
                style={{
                  backgroundColor: colors.secondary,
                  height: 50 * scale,
                  marginHorizontal: 50 * scale,
                  borderRadius: 20 * scale,
                  marginTop: 40 * scale,
                  marginBottom: 0 * scale,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15 * scale,
                  fontWeight: 'bold',
                }}>


                <TouchableOpacity  onPress={() => setItems(Menu)}>
                  <Text
                  
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Tout
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => filterItem("mobile")}>
                  <Text
                 
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Mobile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem("tablette")}>
                  <Text
                 
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Tablette
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem("produit")}>
                  <Text
                  
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    produits
                  </Text>
                </TouchableOpacity>

               
              </View>








              <View
                style={{
                  marginTop: 10* scale,
                }}></View>



{/* 
{items.map((elem) => {
          const {  } = elem;
          return (
              

);
})} */}

         
            
            </NativeBaseProvider>
          </View>  
        </ScrollView>

        <NativeBaseProvider>
            <Fab renderInPortal={false} shadow={2} onPress={showModal}  icon={<Image  source={icons.plus} name="plus"style={{width:30,height:30,tintColor:colors.Quaternary}} />} style={{marginBottom:80,width:70,height:70,backgroundColor:colors.primary}}/>
        </NativeBaseProvider>


       
      </View>
     
    </SafeAreaView>  
      
  );
}
