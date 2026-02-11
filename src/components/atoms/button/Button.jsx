export default function Button({ onClick, type, classname, children, disabled }){
    return <button type={type} onClick={onClick} disabled={disabled} className={classname}>{children}</button>
}