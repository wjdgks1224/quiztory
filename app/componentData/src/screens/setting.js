import React from 'react'
import { Animated, View, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'
import withTitleAndContent from '../components/basicScreen'
import { QuestionCard } from '../components/questioncard'
import {QuizListItem} from '../components/quizListItem'
import {CardView} from '../components/cardView'

function getMyPosts() {
    return [{
        user: {
            name: '민규',
            photo: 'http://image.musinsa.com/data/celeb/6570/6570_1_org.jpg'
        },
        contents: '다시 시작처럼 조금 토라지더라도 서로가 서로에게 위안이 된다는 느낌으로 다시 시작처럼 나아가야지 나에게 너는 정말 큰 희망이라는 존재이니ㄴ까 부디 사라지지 말아줘',
        date: new Date()
    }, {
        user: {
            name: '민규',
            photo: 'http://image.musinsa.com/data/celeb/6570/6570_1_org.jpg'
        },
        contents: '다시 시작처럼 조금 토라지더라도 서로가 서로에게 위안이 된다는 느낌으로 다시 시작처럼',
        date: new Date()
    }, {
        user: {
            name: '민규',
            photo: 'http://image.musinsa.com/data/celeb/6570/6570_1_org.jpg'
        },
        contents: '다시 시작처럼 조금 토라지더라도 서로가 서로에게 위안이 된다는 느낌으로 다시 시작처럼',
        date: new Date()
    }, {
        user: {
            name: '민규',
            photo: 'http://image.musinsa.com/data/celeb/6570/6570_1_org.jpg'
        },
        contents: '다시 시작처럼 조금 토라지더라도 서로가 서로에게 위안이 된다는 느낌으로 다시 시작처럼',
        date: new Date()
    }]
}

function getMyComments() {
    return [{
        user: '댓글 저자',
        contents: '해보려고 인터넷을 뒤져가며 ASUS GPU Tweak,'
    }, {
        user: '병림픽기자',
        contents: '병림픽의 현장입니다!'
    }]
}

function getScrapedQuiz() {
    return [{
        examiner: '유헷',
        type: 'shortAnswer',
        contents: '다음중 내가 오늘 먹은 반찬은?',
        comment: '맛탕은 맛있기 때문입니다. 맛탕은 특히 감자로 해도 되고 고구마로 해도 되고 호박도 맛있기 때문이에요.',
        answer: '맛탕',
        otherAnswer: ['고구마 맛탕', '고구마맛탕']
    }, {
        examiner: '유헷',
        type: 'OX',
        contents: '홍경래의 난, 진주 농민 봉기, 임술 농민 봉기를 계기로 농민의 사회의식은 성장하였다.',
        answer: false,
        comment: '해설은 이렇게 표시된다고 하네요?!',
    }, {
        examiner: '정한',
        type: 'multipleChoice',
        answer: 2,
        selection: ['React', 'Vue', 'Svelte', 'Angular JS'],
        contents: '다음 2019년 가장 급부상중인 프레임워크는?',
        comment: '그냥 그렇게 느껴집니다.'
    }]
}

function getScrapedPosts() {
    return getMyPosts()
}

export default ({ navigation: {
    navigate
} }) => {
    const SettingPageWithData = withTitleAndContent((headerAnimated, commonState, setCommonState) => {
        return <>
            <Animated.View style={{
                height: headerAnimated.interpolate({
                    inputRange: [0, 50, Infinity],
                    outputRange: [90, 70, 70]
                }),
                backgroundColor: '#F7F7F7',
                display: 'flex',
                flexDirection: 'row',
                paddingTop: headerAnimated.interpolate({
                    inputRange: [0, 50, Infinity],
                    outputRange: [20, 15, 15]
                }),
                paddingLeft: 20,
                width: '100%'
            }}>
                <Animated.Image source={{
                    uri: 'https://pbs.twimg.com/profile_images/899119956054335488/7KKkdNRo_400x400.jpg'
                }} style={{
                    width: headerAnimated.interpolate({
                        inputRange: [0, 50, Infinity],
                        outputRange: [50, 40, 40]
                    }),
                    height: headerAnimated.interpolate({
                        inputRange: [0, 50, Infinity],
                        outputRange: [50, 40, 40]
                    }),
                    borderRadius: 60
                }} />
                <Animated.Text style={{
                    color: 'black',
                    fontSize: headerAnimated.interpolate({
                        inputRange: [0, 50, Infinity],
                        outputRange: [18, 15, 15]
                    }),
                    paddingTop: headerAnimated.interpolate({
                        inputRange: [0, 50, Infinity],
                        outputRange: [10, 6, 6]
                    }),
                    marginLeft: 10,
                    fontWeight: 'bold'
                }}>
                    test님
            </Animated.Text>
            </Animated.View>
        </>
    }
    )(false)()({
        height: [90, 70],
    })(class extends React.Component {
        width = Dimensions.get('window').width - 36
        pagerScreenHeight = Dimensions.get('window').height - 256
        viewHeights = []
        buttonActiveRange(i) {
            return [
                (i - 1) * this.width + this.width / 2,
                (i - 1) * this.width + this.width / 2 + 1,
                i * this.width,
                (i + 1) * this.width - this.width / 2 - 1,
                (i + 1) * this.width - this.width / 2]
        }
        state = {
            currentPage: new Animated.Value(0),
            scrollviewHeight: Number(1010100)
        }
        ButtonsWithIndexes = ({ indexes, activedNum, onPress }) => {
            const ChipButton = styled(Animated.Text)`
                    padding-vertical: 7px;
                    padding-horizontal: 12px;
                    border: 1px solid rgba(0, 0,  0, 0.7);
                    border-radius: 500px;
                    margin-right: 5px;
                `
            const ListIndexes = styled.View`
                    flex-direction: row;
                    padding-bottom: 10px;
                    padding-top: 20px;
                `
            return <ListIndexes>
                {indexes.map((label, index) => <TouchableNativeFeedback onPress={() => onPress(index, label)} key={encodeURI(label + index)}>
                    <ChipButton style={{
                        color: this.state.currentPage.interpolate({
                            inputRange: this.buttonActiveRange(index),
                            outputRange: ['#344955', '#FEC864', '#FEC864', '#FEC864', '#344955']
                        }),
                        backgroundColor: this.state.currentPage.interpolate({
                            inputRange: this.buttonActiveRange(index),
                            outputRange: ['#FFFFFF', '#344955', '#344955', '#344955', '#FFFFFF']
                        })
                    }}>{label}</ChipButton>
                </TouchableNativeFeedback>)}
            </ListIndexes>
        }
        setViewpagerHeight = (height) => {
            const standard = height < this.pagerScreenHeight ? this.pagerScreenHeight : height
            this.setState(() => ({
                scrollviewHeight: standard + 15
            }))
        }
         dragControl = ({nativeEvent: {contentOffset: {x}}}) => {
            const currentPage = Math.round(x / this.width)
            const height = this.viewHeights[currentPage]
            this.setViewpagerHeight(height)
        }
        clickedButton = (index) => {
            this.refs.scrollViewPager.scrollTo({
                x: index * this.width
            })
        }
        autoHeight = ({ nativeEvent: { layout: { height } } }, i) => {
            if(this.viewHeights.length === 0) this.setViewpagerHeight(height)
            this.viewHeights[i] = height
        }
        render() {
            const PageItem = styled.View`
                width: ${this.width};
            `

            return <View style={{ padding: 18, paddingTop: 0 }}>
                <this.ButtonsWithIndexes
                    indexes={['스크랩한 문제', '스크랩한 글', '작성한 글']}
                    activedNum={this.state.currentPage}
                    onPress={this.clickedButton}
                />
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    horizontal={true}
                    ref="scrollViewPager"
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: {
                                x: this.state.currentPage
                            }
                        }
                    }], {

                        })}
                    style={{
                        height: this.state.scrollviewHeight
                    }}
                    onMomentumScrollEnd={this.dragControl}>
                    <PageItem>
                        <View onLayout={(e) => this.autoHeight(e, 0)}>
                            
                            {getScrapedQuiz().map((item, i, wholeList) => <CardView><QuizListItem item={item} isLast={true}/></CardView>)}
                        </View>
                    </PageItem>
                    <PageItem>
                        <View onLayout={(e) => this.autoHeight(e, 1)}>
                        {getScrapedPosts().map((x, i) => <QuestionCard {...x} navigate={navigate} key={encodeURI(x + i)} />)}
                        </View>
                    </PageItem>
                    <PageItem>
                        <View onLayout={(e) => this.autoHeight(e, 2)}>
                            {getMyPosts().map((x, i) => <QuestionCard briefly {...x} navigate={navigate} key={encodeURI(x + i)} />)}
                        </View>
                    </PageItem>
                </ScrollView></View>
        }
    })
    return <SettingPageWithData />
}