import { View, Text ,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react';
import {MapPinIcon,ChevronLeftIcon,PhoneIcon,AcademicCapIcon,CheckCircleIcon,EnvelopeIcon} from 'react-native-heroicons/solid';
import { DataTable } from 'react-native-paper'; 



export default function CaseStatus({navigation}) {
  return (
    <ScrollView className='bg-[#EAECF9] h-full' showsVerticalScrollIndicator={false}>
        <View className="p-2  h-12">
          <View className="flex-row justify-between mt-3 ml-2.5">
            <TouchableOpacity className='bg-[#FF7754] rounded-lg p-1' onPress={() => navigation.navigate("HomePage")}><ChevronLeftIcon color="white" size={30}/></TouchableOpacity>
          </View>
        </View>

        <View className='bg-white h-fit mt-12 mx-2 rounded-lg'>
            <Text className='text-center p-2 bg-orange-400 rounded-t-lg text-xl font-bold text-white '>CASE DETAILS</Text>
            <DataTable > 
                    <DataTable.Row > 
                      <DataTable.Cell ><Text className='font-bold'>Case Type</Text></DataTable.Cell> 
                      <DataTable.Cell>R.C.C</DataTable.Cell> 
                    </DataTable.Row> 
                
                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Filling Number</Text></DataTable.Cell> 
                      <DataTable.Cell>583/2016</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Filling Date</Text></DataTable.Cell> 
                      <DataTable.Cell>14-10-2016</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Registration Number</Text></DataTable.Cell> 
                      <DataTable.Cell>534/2016</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Registration Number</Text></DataTable.Cell> 
                      <DataTable.Cell>534/2016</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Registration Date</Text></DataTable.Cell> 
                      <DataTable.Cell>14-10-2016</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>CNR Number</Text></DataTable.Cell> 
                      <DataTable.Cell>MHTH110005862016</DataTable.Cell> 
                    </DataTable.Row> 
          </DataTable> 
        </View>

        <View className='bg-white h-fit mx-2 rounded-lg mb-24 mt-5'>
            <Text className='text-center p-2 bg-orange-400 rounded-t-lg text-xl font-bold text-white '>CASE STATUS</Text>
            <DataTable > 
                    <DataTable.Row > 
                      <DataTable.Cell ><Text className='font-bold'>First Hearing Date</Text></DataTable.Cell> 
                      <DataTable.Cell>07-02-2017</DataTable.Cell> 
                    </DataTable.Row> 
                
                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Next Hearing Date</Text></DataTable.Cell> 
                      <DataTable.Cell>09-01-2024</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Case Stage</Text></DataTable.Cell> 
                      <DataTable.Cell>N.B.W._ Unready</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Court Number</Text></DataTable.Cell> 
                      <DataTable.Cell>1-J.M.F.C Rly. Kalyan</DataTable.Cell> 
                    </DataTable.Row> 

                    <DataTable.Row> 
                      <DataTable.Cell><Text className='font-bold'>Bail Status</Text></DataTable.Cell> 
                      <DataTable.Cell>Applied</DataTable.Cell> 
                    </DataTable.Row> 
          </DataTable> 
        </View>

    </ScrollView>
  )
}