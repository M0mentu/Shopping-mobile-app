import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { facebookService } from './facebookService'
import { Actions } from 'react-native-router-flux'

export default class LogInPage extends React.Component {
    constructor(props) {
        super(props)

        this.login = this.login.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                {console.log("a7a")
                }
                {facebookService.makeLoginButton((accessToken) => {
                    console.log("a7a")
                    this.login(accessToken)
                    console.log("a7a b3d access")


                })}
            </View>
        )
    }

    login() {
        console.log("a7a 3nd login ")
return(
    <View>
        <Text>dsadasdas</Text>
    </View>
)
        //Actions.login();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})