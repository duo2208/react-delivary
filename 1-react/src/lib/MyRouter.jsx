import React from "react";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

// 요청 겅로를 상태로 관리.
// 컴포넌트 간에 자주 사용되므로 컨텍스트로 값을 제공.
export class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: window.location.pathname,
    };
    this.handleChangePath = this.handleChangePath.bind(this);
  }

  handleChangePath(path) {
    this.setState({ path });
  }

  render() {
    const contextValue = {
      path: this.state.path,
      changePath: this.handleChangePath,
    };

    return (
      <routerContext.Provider value={contextValue}>
        {this.props.children}
      </routerContext.Provider>
    );
  }
};

// 자식으로 Route를 받아 경로에 적절한 컴포넌트를 반환하는 역할.
export const Routes = ({children}) => {
    return (
        <routerContext.Consumer>
        {({ path }) => {
            let selectedRoute = null;

            React.Children.forEach(children, child => {
                // 리액트 엘리먼트인지 검사한다.
                if (!React.isValidElement(child)) return;

                // 프래그먼트인지 검사한다.
                if (child.type === React.Fragment) return;

                // Route 컴포넌트인지 검사한다. 덕 타이핑
                if (!child.props.path || !child.props.element) return;

                // 요청 경로를 검사한다.
                if (child.props.path !== path.replace(/\?.*$/, "")) return;

                selectedRoute = child.props.element;
            });

            return selectedRoute;
        }}
        </routerContext.Consumer>
  );
};

// JSX 문법을 사용한 <Route>는 React.createElement(Route) 와 같은 코드이다.
export const Route = () => null;

export const Link = ({ to, ...rest }) => (
    <routerContext.Consumer>
      {({ path, changePath }) => {
        const handleClick = (e) => {
          e.preventDefault();
          if (to !== path) changePath(to);
        };

        return <a {...rest} href={to} onClick={handleClick} />;
      }}
    </routerContext.Consumer>
);