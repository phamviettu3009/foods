import React from 'react'
import { View, StyleSheet, Modal, TouchableWithoutFeedback, PixelRatio, Animated } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import BasicModal from '../Modal/basic'

function ModalComponent({ visible, onCloseModal, onCloseTouchOutSide, onCloseTopRight, typeModal, valueAnimation, useAnimation, typeAnimation }) {
    const onCloseTouchOutSideModal = onCloseTouchOutSide == undefined ? true : onCloseTouchOutSide
    const onCloseTopRightModal = onCloseTopRight == undefined ? true : onCloseTopRight
    const typeModal2 = typeModal == undefined ? {type: "basic"} : typeModal
    let valueAnimationModal = valueAnimation == undefined ? 1 : valueAnimation
    valueAnimationModal = useAnimation == undefined ? 1 : useAnimation ? valueAnimationModal : 1

    let transform = {}

    switch (typeAnimation) {
        case 'scale':
            transform = {transform: [{scale: valueAnimationModal}]}
            break
        case 'bottomToTop':
            transform = {transform: [{translateY: valueAnimationModal}]}
            break
        case 'topToBottom':
            transform = {transform: [{translateY: valueAnimationModal}]}
            break
        case 'leftToRight':
            transform = {transform: [{translateX: valueAnimationModal}]}
            break
        case 'rightToLeft':
            transform = {transform: [{translateX: valueAnimationModal}]}
            break
        default:
            transform = {}
    }
      

    return(
        <Modal
            transparent={true}
            visible={visible}
            supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        > 
            <TouchableWithoutFeedback onPress={() => onCloseTouchOutSideModal ? onCloseModal() : null}>
                <View style={styles.centeredView}>
                    <TouchableWithoutFeedback>
                        <Animated.View style={[styles.modalView, transform]}>
                            {
                                onCloseTopRightModal 
                                    ? 
                                    <View style={styles.boxIconCloseHeaderModal}>
                                        <TouchableWithoutFeedback onPress={() => onCloseModal()}>
                                            <View style={styles.IconCloseHeaderModal}>
                                                <AntDesign name="closecircle" color="red" size={20}/>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                    :
                                    null
                            }
                            <View style={styles.boxBodyModal(onCloseTopRightModal)}>
                                {
                                    typeModal2.type == "basic"
                                        ? 
                                        <BasicModal 
                                            title={typeModal2.title}
                                            content={typeModal2.content}
                                        />
                                        :
                                        null
                                }
                            </View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 10,
        minHeight: "20%",
        minWidth: "90%",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
    },
    boxIconCloseHeaderModal: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        justifyContent: "center",
        alignItems:"flex-end",
        padding: 5
    },
    boxBodyModal: (onCloseTopRightModal) => {
        return {
            paddingTop: onCloseTopRightModal ? 0 : 25,
            paddingHorizontal: 25,
            paddingBottom: 25
        }
    },
    IconCloseHeaderModal: {
        height: PixelRatio.getPixelSizeForLayoutSize(10),
        width: PixelRatio.getPixelSizeForLayoutSize(10),
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ModalComponent