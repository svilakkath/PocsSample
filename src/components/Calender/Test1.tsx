import { months } from 'moment';
import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, TextStyle, Modal, TouchableOpacity } from 'react-native';

import { CalendarList, DateData } from 'react-native-calendars';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
const initialDate = formattedDate;
interface Props {
    horizontalView?: boolean;
}
const Test1 = (props: Props) => {

    const { horizontalView } = props;
    const [selected, setSelected] = useState(initialDate);
    const [open, setOpen] = useState(false);

    const handlePress = (day: DateData) => {
        setSelected(day.dateString);
    };

    const marked = useMemo(() => {
        return {
            [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#40826D',
                selectedTextColor: 'white'
            }
        };
    }, [selected]);
    const [displayedMonth, setDisplayedMonth] = useState(currentDate);

    const handleMonthChange = (newMonth: Date) => {
        setDisplayedMonth(newMonth);
    };

    const onVisibleMonthsChange = (months: any) => {
        if (months.length > 0) {
            const firstVisibleMonth = months[0];
            handleMonthChange(new Date(firstVisibleMonth.dateString));
        }
    };

    return (
        <View>

            <Text id='test' style={{ textAlign: 'center', fontSize: 22, color: '#000', marginTop: 20 }}>
                {displayedMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </Text>

            <View style={styles.modalView}>
                <CalendarList
                    current={initialDate}
                    pastScrollRange={0}   // will render one additional month in the past (pastScrollRange={1}) 
                    futureScrollRange={2} // will render one additional month in the future (={1} 
                    onDayPress={handlePress}
                    markedDates={marked}
                    renderHeader={!horizontalView ? renderCustomHeader : undefined}

                    calendarHeight={!horizontalView ? 200 : undefined}
                    theme={!horizontalView ? theme : undefined}
                    horizontal={horizontalView}
                    pagingEnabled={horizontalView}
                    staticHeader={horizontalView}
                    minDate='2024-01-18'
                    maxDate='2024-02-7'
                    calendarStyle={{
                        // backgroundColor: '#40826D',
                        width: '75%',
                        // height:'30%',
                        alignSelf: 'center',
                        // padding: 10,
                        borderRadius: 15
                    }}
                    allowSelectionOutOfRange={true}
                    onVisibleMonthsChange={onVisibleMonthsChange}

                />

            </View>
        </View>
    );
};

const theme = {
    stylesheet: {
        calendar: {
            header: {
                dayHeader: {
                    fontWeight: '600',
                    color: '#40826D',

                }
            }
        }
    },
    'stylesheet.day.basic': {
        today: {
            borderColor: '#40826D',
            borderWidth: 0.8
        },
        todayText: {
            color: '#5390D9',
            fontWeight: '800'
        }
    }
};

function renderCustomHeader(date: any) {

    const header = date.toString('MMMM yyyy');
    const [months, year] = header.split(' ');
    const textStyle: TextStyle = {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 0,
        paddingBottom: 0,
        color: '#5E60CE',
        paddingRight: 5,
    };

    return (
        <View style={[styles.header]}>
            {/* <Text style={[styles.month, textStyle]}>{`${months}`}</Text> */}
            {/* <Text style={[styles.year, textStyle]}>{year}</Text> */}
        </View>
    );
}

export default Test1;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        // width: '100%',
        // justifyContent: 'space-between',
        marginTop: 0,
        marginBottom: 0,
        // backgroundColor: 'red',
    },
    month: {
        marginLeft: 5,
    },
    year: {
        marginRight: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        // margin: 20,
        backgroundColor: 'grey',
        // borderRadius: 20,
        // width: '90%',
        // padding: 35,
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
        height: '50%',
        marginTop: 160,
        borderRadius: 20
    }
});