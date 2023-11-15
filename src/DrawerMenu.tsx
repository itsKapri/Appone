import { createDrawerNavigator } from "@react-navigation/drawer";
import First from "./First";
import Second from "./Second";
const Drawer = createDrawerNavigator();


const DrawerMenu = () => {
  return (

    <Drawer.Navigator>
      <Drawer.Screen
        name="First"
        component={First}
      />
       <Drawer.Screen
        name="Second"
        component={Second}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
