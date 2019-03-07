/**
 * Created by moshuai on 2019/3/5.
 */
import  React ,{Component} from "react";
import { Input,Button,List  } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import store from './index';


class ToDoList extends Component{

      constructor(props){
          super(props);
          this.state=store.getState();
          this.handleInputChange=this.handleInputChange.bind(this);
          this.handleStoreChange=this.handleStoreChange.bind(this);
          store.subscribe(this.handleStoreChange);
      }

       render(){
           return (
               <div>
                    <Input value={this.state.inputValue}
                    placeholder="Basic usage"
                     style={{width:'300px',marginRight:'10px'}}
                    onChange={this.handleInputChange}/>
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                   <List
                      style={{width :'300px',marginLeft:'368px',marginTop:'10px'}}
                       bordered
                       dataSource={this.state.list}
                       renderItem={item => (<List.Item>{item}</List.Item>)}
                   />
               </div>
               )
       }
            handleStoreChange(){
                this.setState(store.getState());
                console.log(store.getState());
            }
            handleBtnClick(){
                const  action={
                    type:"add-todo-item"
                };
                store.dispatch(action);
            }

            handleInputChange(e){
                const action={
                    type:"change-input-value",
                    value:e.target.value
                }
                store.dispatch(action);
            }
}

export default ToDoList;