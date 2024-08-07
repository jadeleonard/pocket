interface ButtonProps{
    className?:string
    id?:string
    textContent?:string
    type?:'submit'| 'button'
    style?:string


    onClick?:(event:MouseEvent) => void
    disabled?:boolean
    autofocus?:boolean
    formmethod?: 'post' | 'dialog' | 'get'
    name?:string
    popover?: 'manual' | 'auto'
    popovertarget?: HTMLElement
    popovertargetaction?: 'hide' | 'show' | 'toggle'
    value?:string
}


const Button = (props:ButtonProps):HTMLButtonElement =>{
    const button = document.createElement('button') as HTMLButtonElement
    if(props.className)button.className = props.className
    if(props.id)button.id = props.id
    if(props.textContent)button.textContent = props.textContent  
    if(props.type)button.type = props.type
    if(props.style)button.style.cssText = props.style
    if(props.onClick)button.onclick = props.onClick
    if(props.disabled)button.disabled = props.disabled
    if(props.autofocus)button.autofocus =props.autofocus
    if(props.formmethod)button.formMethod = props.formmethod
    if(props.name)button.name = props.name
    if(props.value)button.value = props.value
    return button
}




export {
    Button
}