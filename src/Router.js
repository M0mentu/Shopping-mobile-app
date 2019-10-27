import React from 'react';
import { Scene, Router, ActionConst, Drawer } from 'react-native-router-flux';
import { TouchableOpacity, View, Image, Dimensions } from 'react-native';
import HomeUnsigned from './Components/Welcome/HomeUnsigned';
import WelcomePage from './Components/Welcome/WelcomePage';
import WelcomePage1 from './Components/Welcome/WelcomePage1';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import LogInPage from './Components/Auth/FacebookLog';
import ForgetPassword from './Components/Auth/ForgetPassword';
import Shop from './Components/Shop/Shop';
import DepartmentShop from './Components/Shop/DepartmentShop';
import { AppLogo } from './Common';
import SideMenu from './Components/SideMenu';
import Cart from './Components/Bag/Cart';
import ProductDetails from './Components/Shop/ProductDetails';
import UserInfo from './Components/Auth/UserInfo';
import PaymentPage from './Components/Auth/PaymentPage';
import { Actions } from 'react-native-router-flux';
import Terms from './Components/Misc/Terms';
import { Icon } from 'native-base';
import OrderComplete from './Components/Misc/OrderComplete';
import NavBar from './Components/NavBar/NavBar'
import NavBarNormal from './Components/NavBar/NavBarNormal'

import SearchResult from './Components/Shop/SearchResult'

//

import Account from './Components/Account';
import OrderStatus from './Components/Account/orderstatus';
import PaymentInfoPage from './Components/Account/paymentinfopage';
import Settings from './Components/Account/settings';
//

var { height, width } = Dimensions.get('window');

const RouterComponent = () => {
    const { navStyle, titleStyle } = Styles;
    return (
        <Router>
            <Scene
                key="root"
                hideNavBar
                navigationBarStyle={navStyle}
                titleStyle={titleStyle}>
                <Scene key="welcomepage" component={WelcomePage} />
                <Scene
                    key="homeUnsigned"
                    component={HomeUnsigned}
                    type={ActionConst.RESET}
                />
                <Scene
                    key="welcomepage1"
                    component={WelcomePage1}
                    type={ActionConst.RESET}
                />

                <Scene key="Auth" initial type={'reset'}>
                    <Scene
                        key="login"
                        component={Login}
                        title="SIGN IN"
                        back={true}
                        renderBackButton={() => renderBackButton()}
                        initial
                    />
                    <Scene
                        key="signup"
                        component={SignUp}
                        title="SIGN UP"
                        back={true}
                        renderBackButton={() => renderBackButton()}
                    />
                    <Scene
                        key="forgetpassword"
                        component={ForgetPassword}
                        title="RESET PASSWORD"
                        back={true}
                        renderBackButton={() => renderBackButton()}
                    />
                    <Scene key="facebook" component={LogInPage} hideNavBar />
                </Scene>

                <Scene key="shopmain">
                    <Drawer
                        hideNavBar
                        key="drawerMenu"
                        drawerImage={require('./Assets/icon-nav.png')}
                        contentComponent={SideMenu}
                        drawerWidth={width - 80}
                        drawerPosition="left"

                    >
                        <Scene
                            key="shop"
                            component={Shop}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                            navBar={NavBar}

                        />
                        <Scene
                            key="departmentshop"
                            component={DepartmentShop}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="productDetails"
                            component={ProductDetails}
                            hideNavBar
                            onBack={() => {
                                Actions.pop();
                            }}
                        />
                        <Scene
                            key="cart"
                            component={Cart}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="userinfo"
                            component={UserInfo}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="paymentpage"
                            component={PaymentPage}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="ordercomplete"
                            component={OrderComplete}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="account"
                            component={Account}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="orderstatus"
                            component={OrderStatus}
                            hideNavBar
                            back={true}
                        />
                        <Scene
                            key="paymentinfopage"
                            component={PaymentInfoPage}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="settings"
                            component={Settings}
                            renderTitle={() => {
                                return <AppLogo />;
                            }}
                        />
                        <Scene
                            key="searchresult"
                            component={SearchResult}
                            navBar={NavBarNormal}
                            
                        />


                    </Drawer>
                    <Scene key="terms" component={Terms} hideNavBar />
                </Scene>
            </Scene>
        </Router>
    );
};

const Styles = {
    navStyle: {
        backgroundColor: '#f2f2f2',
        elevation: 0,
        borderBottomWidth: 0,
    },
    titleStyle: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
        paddingRight: 60,
        fontFamily: 'SourceSansPro',
        fontWeight: '400',
        fontSize: 20,
    },
    titleImage: {},
};
renderBackButtonTerms = () => {
    <TouchableOpacity onPress={() => Actions.ordercomplete()}>
        <View style={{ alignItems: 'center' }}>
            {/* <Image
                source={require('./Assets/icon-back.png')}
                style={{ width: 13, height: 22.1, marginLeft: 20 }}
            /> */}

            <Icon type="Feather" name="x" />
        </View>
    </TouchableOpacity>;
};
const renderBackButton = () => (
    <TouchableOpacity onPress={() => Actions.pop()}>
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('./Assets/icon-back.png')}
                style={{ width: 13, height: 22.1, marginLeft: 20 }}
            />
            {/*
                <Icon name='ios-arrow-round-back' style={{ color: '#fff' }} />
            */}
        </View>
    </TouchableOpacity>
);

export default RouterComponent;
