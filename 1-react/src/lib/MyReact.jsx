import React from "react";
import {createEventEmitter} from "shared/lib/EventEmitter";

const MyReact = (function () {
    function createContext(initialValue) {
        const emitter = createEventEmitter(initialValue)

        // 공급자 : 리액트 렌더 사이클과 연동하기 위한 상태
        class Provider extends React.Component {
            componentDidMount() {
                emitter.set(this.props.value);
            };
            componentDidUpdate() {
                emitter.set(this.props.value);
            };

            render() {
                return <>{children(this.state.value)}</>
            };
        }

        // 상태를 구독할 수 있는 컴포넌트. 이 값이 렌더 프롬의 함수 인자로 들어옴
        class Consumer extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    value: emitter.get(),
                };
                this.setValue = this.setValue.bind(this);
            };

            setValue(nextValue) {
                this.setState({value: nextValue});
            }

            componentDidMount() {
                emitter.on(this.setValue);
            };

            render() {
                return <>{children(this.state.value)}</>
            };
        }

        return {
            Provider,
            Consumer,
        }
    }

    return {
      createContext,
    }
})();

export default MyReact;