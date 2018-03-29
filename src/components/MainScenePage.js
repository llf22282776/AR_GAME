'use strict'
//这个是测试页面，需要的工作很简单
//1.数据库的虫子显示在列表里面(暂时不做)
//2.显示当前编辑好的vr虫子信息
//3.如果上传虫子成功，弹出模态框
'use strict';
import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    List,
    Right,
    Body,
    Icon,
    Text,
    Card,
    CardItem,
    ListItem
} from 'native-base';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { styles, mapObject, route_name } from '../util/Constants'
export default class MainScenePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.renderEditedBugInfo = this.renderEditedBugInfo.bind(this);
    }
    render() {
        const { select } = this.props.ar;
        const { push } = this.props.actions;
        const { edited } = select;
        console.log("edited:" + edited)
        return (<Container>

            <Content>
                <List>
                    {
                        this.renderEditedBugInfo(select, edited)
                    }
                </List>
                <Button block onPress={() => {
                    //跳转页面就ok,这里是捉虫,那就传ar_type 种0 抓1
                    push(route_name.arScene, {
                        arType: 0,   //种0,这个属性不需要放入到state里面去吗,我想暂时不需要，这个是用来判定捉还是种的页面显示
                    })
                }}>
                    <Text>种vr虫子</Text>
                </Button>
            </Content>
        </Container>)



    }
    renderEditedBugInfo(content, isFinish) {
        const { push } = this.props.actions;
        if (isFinish === false) {
            //没有，居中显示为编辑
            return (<View style={styles.middle_text}><Text>还未编辑</Text></View>)
        } else {
            //遍历这个数组，显示出来
            return (
                <TouchableOpacity onPress={() => {
                    console.log("press");
                    push(route_name.arScene, {
                        arType: 1,   //种0,这个属性不需要放入到state里面去吗,我想暂时不需要，这个是用来判定捉还是种的页面显示
                    })
                }}>
                    <Card>
                        <CardItem cardBody>
                            <ListItem>
                                <Text>index:{content.index}</Text>
                            </ListItem>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            );
        }
    }

}


