import { FunctionComponent } from "react";
import './SidebarOption.css'
interface SidebarOptionProps {
  text: string;
    Icon: any;
    active: any;
}
 
const SidebarOption: FunctionComponent<SidebarOptionProps> = (props:SidebarOptionProps) => {
    return (
        <div className={`sidenavbaroption ${props.active && 'sidebarOption--active'}`}>
            <props.Icon />
            <h2>
                {
                  props.text 
                }
            </h2>
        </div>
     );
}
 
export default SidebarOption;
