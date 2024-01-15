import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'

import { copilot, walkthroughable, CopilotStep, } from '@okgrow/react-native-copilot';
import TooltipComponent from './toolComponent';


const TestScreen = (props: any) => {
    console.log("-----------",props);
    
    const WalkthrouhableView = walkthroughable(View)
    const WalkthrouhableText = walkthroughable(Text)

    useEffect(() => {
        props.start()
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.activeSwitchContainer}
            >
                <CopilotStep
                    text={[
                            'See interviews by language',
                            'Select from interviews in your language it wont change users settings'
                        ]}
                    order={1}
                    name='firstUniqueKey'

                >
                    <WalkthrouhableView
                        style={styles.Walkthrouhable}
                    >
                        <Text style={styles.text}>Item 1</Text>
                    </WalkthrouhableView>

                </CopilotStep>
                <CopilotStep
                     text={[
                        'View all available dates',
                        'Explore additional time slots for more flexible scheduling'
                    ]}
                    order={2}
                    name='secondUniqueKey'
                >
                    <WalkthrouhableView
                        style={styles.Walkthrouhable}
                    >
                        <Text style={styles.text}>Item 2</Text>
                    </WalkthrouhableView>
                </CopilotStep>

            </View>
        </SafeAreaView >
    )
}

export default copilot({
    tooltipComponent: TooltipComponent,
    overlay: 'svg',
    animated: true,
})(TestScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 60,
        width: 60,
        backgroundColor: 'purple',
        borderRadius: 15,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#fff'
    },
    activeSwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
        paddingHorizontal: 70,
        top: 70

    },
    Walkthrouhable:{
        height: 85,
        backgroundColor: 'red'
    }
})
