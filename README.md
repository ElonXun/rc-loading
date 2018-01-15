# rc-loading
> rc-loading 是一个基于React封装的loading组件;该组件写法模仿ant-design中[Spin](https://ant.design/components/spin-cn/),是其扩展组件

### 更新
> 版本1.0.0 更新时间: 2018-01-14 
### 安装
### 用法
```
import React, { Component } from 'react';
import Loading from 'rc-loading';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      spinning:false
    }
  }


  render() {
    return (
     <div>
       <div>
         <Loading spinning={this.state.spinning}>
          <div style={{width:300,height:300}}>
            <p>hello loading</p>
          </div>
        </Loading>
       </div>
       <button onClick={()=>{
         this.setState({
           spinning:!this.state.spinning,
         })
       }}>点击</button>
     </div>
    );
  }
}
```
