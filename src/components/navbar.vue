<template>
<div>
    <v-toolbar
        app 
        dark 
        height="50">
    <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class=" my-1 text-capitalize">
                <span class=" font-weight-bold">ayman</span>
                <span class="subheader red--text font-weight-bold">E-comerce</span>
      </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-menu offset-y>
           <template v-slot:activator="{ on }" >
               <v-btn flat outlined v-on="on">
                   <v-icon>mdi-menu</v-icon>
                   <span>menu</span>
               </v-btn>
           </template>
           <v-list>
               <v-list-item v-for="item in items" :key="item.title" router :to="item.link">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="">{{item.title}}</v-list-item-title>
                </v-list-item-content>
               </v-list-item>
           </v-list>
       </v-menu>
       <v-app-bar-nav-icon dark @click="logout()" >
           <v-icon>mdi-logout</v-icon>
       </v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer app  dark v-model="drawer" 
    >
    <v-list-item>
        <v-list-item-avatar class="pa-1" color="red">
            <v-img src="https://i.pinimg.com/474x/68/11/a9/6811a9449878d112ba510f801464610c--avatar-ninjas.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>           
            <v-list-item-title class="text-capitalize">dashboard</v-list-item-title>
            <v-list-item-subtitle class="text-capitalize"> ayman naser eddin</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    <v-divider color="#fff"></v-divider>
    <v-list>
        <v-list-item-group v-model="item">
            <v-list-item dense flat v-for="item in items" :key="item.title" router :to="item.link">
                <v-list-item-icon>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>      
        <v-list-group prepend-icon="mdi-account" value="1" no-action>
            <template v-slot:activator>
                <v-list-item-title>Users</v-list-item-title>
            </template>
            <v-list-group prepend-icon="mdi-arrow-up" sub-group no-action>
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Admin</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item v-for="(item , i) in admin" :key="i" link>
                    <v-list-item-title v-text="item[0]"></v-list-item-title>
                    <v-list-item-icon>
                        <v-icon v-text="item[1]"></v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="mdi-arrow-up" sub-group no-action>
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Actions</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item v-for="(item , i) in actins" :key="i" link>
                    <v-list-item-title v-text="item[0]"></v-list-item-title>
                    <v-list-item-icon>
                        <v-icon v-text="item[1]"></v-icon>
                    </v-list-item-icon>

                </v-list-item>
            </v-list-group>
        </v-list-group>  

        <v-row justify="center">
            <v-dialog v-model="dialog"  fullscreen transition="dialog-bottom-transition">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text @click="dialog = false">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                </v-card>
            </v-dialog>
        </v-row>  

        
    </v-list>         
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            drawer:false,
            item:1,
            items:[
                {title: "home" , icon:"mdi-home", link:"/"},
                {title: "about" , icon:"mdi-dialpad", link:"/about"},
                {title: "grid system" , icon:"mdi-aspect-ratio", link:"/grid"},
                {title: "item" , icon:"mdi-account-child-circle", link:"/team"},
                {title: "video" , icon:"mdi-video-circle", link:"/video"},

            ],
             admin:[
                ['managment', 'mdi-wrench'],
                ['sitting', 'mdi-settings'],
            ],
            actins:[
                ['create', 'mdi-plus'],
                ['read', 'mdi-book'],
                ['edite', 'mdi-dialpad'],
                ['delete', 'mdi-delete'],
            ],
        }
    },
    methods:{
        logout(){
            alert("logout")
        }
    }
}
</script>

<style>
.v-application a {
    color: #fff;
}
</style>