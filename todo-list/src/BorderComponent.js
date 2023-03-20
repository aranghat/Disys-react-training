export default function 
//BorderComponent({children}){
    BorderComponent(props){
    return(<div className="border border-success">
        Pending as of {new Date().toLocaleTimeString()}
        {props.children}
    </div>)
}