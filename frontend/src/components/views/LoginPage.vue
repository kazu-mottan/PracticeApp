<template>
    <v-container fluid fill-height fill-wight>
    <v-dialog v-model="loginDialogflg" persistent >
        <v-layout align-center justify-center>
            <v-col xs12 sm8 md4>
                <v-card class="elevation-12"  width="60vh" >
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                            <v-text-field id="password" prepend-icon="lock" name="password" label="Password"
                                type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @Click.stop="loginCheck">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-layout>
    </v-dialog>
</v-container>
</template>
<script>

export default {
    name: 'LoginPage',
    props:{
        loginDialogflg:{
            type:Boolean,
            default: false,
        }
    },
    methods:{
        submitpush:function(){
            loginDialogflg = false
        },
        // loginDialog:function(value){
        //     value = true
        // }
    }

};
</script>
 