import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    Button,
    Modal,
    FlatList
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from './AppText';
import Screen from './Screen';
import defaultStyles from '../config/styles';
import PikerItem from './PikerItem';

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={26}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}

                        />
                    )}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={26}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <PikerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item)

                                }}
                            />}
                    />
                </Screen>
            </Modal>

        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1
    }
})
export default AppPicker;