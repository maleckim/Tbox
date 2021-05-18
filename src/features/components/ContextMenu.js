import {
    Menu,
    Item,
    Separator,
    Submenu,
    useContextMenu
  } from "react-contexify";
  
  import "react-contexify/dist/ReactContexify.css";
  
  const MENU_ID = "poop";
  
  export default function ContextMenu(props) {
    // 🔥 you can use this hook from everywhere. All you need is the menu id
    const { show } = useContextMenu({
      id: MENU_ID
    });
   
    console.log(props)
    function handleItemClick({ event, props, triggerEvent, data }){
      console.log(event, props, triggerEvent, data );
    }
  
    function displayMenu(e){
      // put whatever custom logic you need
      // you can even decide to not display the Menu
      show(e, { props: { id: Number(e.currentTarget.id) } });
      
    }
  
    return (
        
      <div>         
        <div onContextMenu={displayMenu}>
          {props.message}
        </div>
  
  
        <Menu id={MENU_ID}>
          <Item onClick={handleItemClick}>
            Item 1
          </Item>
          <Item onClick={handleItemClick}>
            Item 2
          </Item>
          <Separator />
          <Item disabled>Disabled</Item>
          <Separator />
          <Submenu label="Submenu">
            <Item onClick={handleItemClick}>
              Sub Item 1
            </Item>
            <Item onClick={handleItemClick}>Sub Item 2</Item>
          </Submenu>
        </Menu>
      </div>
    );
  }