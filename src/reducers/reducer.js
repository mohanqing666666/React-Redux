/**
 * Created by moshuai on 2019/3/5.
 */
const defaultState={
    inputValue:'项目',
    list:['项目可行性研究报告概述 编辑 是通过对项目的主要内容和配套条件','项目可行性研究报告概述 编辑 是通过对项目的主要内容和配套条件','项目可行性研究报告概述 编辑 是通过对项目的主要内容和配套条件']
}
export default (state=defaultState,action)=>{
    if(action.type==="change-input-value"){
       const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type==="add-todo-item"){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue="";
        return newState;
    }
    console.log(state,action);
    return state;
}