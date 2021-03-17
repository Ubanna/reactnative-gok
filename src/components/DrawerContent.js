import * as React from 'react';
import { View, StyleSheet, Linking, Platform } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import { MaterialCommunityIcons as Icon, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';


const DrawerContent = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name='home'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Home'
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name='user'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Profile'
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                           <DrawerItem
                            icon={({ color, size }) => (
                                <FontAwesome5
                                    name='cog'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Settings'
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section styles={styles.bottomDrawerSection}>
                <Caption style={{ marginLeft: 10, fontSize: 8 }}>Follow us</Caption>
                <View
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
                >
                    <TouchableOpacity
                    >
                        <FontAwesome5 name="facebook"
                            size={25} color="#4267b2"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    >
                        <FontAwesome5 name="instagram"
                            size={25} color="#e95950"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    >
                        <FontAwesome5 name="linkedin"
                            size={25} color="#0077b5"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    >
                        <FontAwesome5 name="twitter"
                            size={25} color="#38a1f3"
                        />
                    </TouchableOpacity>
                </View>
                <Caption style={{ marginLeft: 20, fontSize: 10 }}>&copy; {new Date().getFullYear()} Weck Autos. All rights reserved.</Caption>
            </Drawer.Section>
            {
                        Platform.OS == "ios" ? (
                            <View style={{ marginVertical: 20 }} />
                        ) : (
                            null
                        )
                    }
        </View>
    )
}


export default DrawerContent;


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 12,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 50,
        // borderTopColor: '#f4f4f4',
        // borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});