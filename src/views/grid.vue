<template>
<div>
    <h1 class="subheading grey--text text-capitalize">list page</h1>
    <v-container class="my-5">
        <v-layout row wrap >
            <v-flex xs4 class="ml-0 mx-1">
                <v-tooltip top>
                <template v-slot:activator="{on}">
                    <v-btn  block color="primary" class="" @click="sortBy('title') " v-on="on">sort title </v-btn>
                </template>
            <span>sort project for title Lorem ipsum dolor sit amet consectetur, adipisicing elit..</span>        
            </v-tooltip>
            </v-flex>           
            <v-flex xs6 >

                    <v-dialog  max-width="90%" class="mx-2 " v-model="dialog"  hide-overlay transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                            <v-btn  block color="primary" v-on="on" >add new post </v-btn>
                        </template>
                        <v-card>
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>
                                    Add new project
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                                    <v-toolbar-items>
                                        
                                        <v-btn dark text @click="dialog = false">Save</v-btn>
                                        <v-btn dark text @click="dialog = false" icon>
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-toolbar-items>
                            </v-toolbar>
                            <v-form ref="form" class=" ma-3 pt-3">
                                <v-text-field prepend-icon="mdi-account-circle" label="title" v-model="title" :rules="inputRules"></v-text-field>
                                <v-textarea label="information"  prepend-icon="mdi-pencil" v-model="content" :rules="inputRules"></v-textarea>
                                <v-menu offset-y class="pa-3" max-width="290px" min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field label="date" :value="date" v-on="on" prepend-icon="mdi-calendar-range" :rules="inputRules"></v-text-field>  
                                    </template>
                                        <v-date-picker flat color="purple" v-model="date"></v-date-picker>                            

                                </v-menu>
                            </v-form>
                        </v-card>
                    </v-dialog>
            </v-flex>           

        </v-layout>
          <v-card  dark v-for="project in projects" :key="project.title" flat  :class="`pa-5 mt-1 project ${project.status}`">
                <v-layout row wrap >
                        <v-flex xs12 sm6 md6>
                            <div class="caption grey--text">name</div>
                            <p>{{project.title}}</p>
                        </v-flex>
                        <v-flex xs6 md2>
                            <div class="caption grey--text">day</div>
                            <p>{{project.date}}</p>
                        </v-flex>
                        <v-flex xs6  md2>
                            <div class="caption grey--text">count</div>
                            <p>{{project.count}}</p>
                        </v-flex>
                        <v-flex xs12 md2>
                            <div class="caption grey--text">status</div>
                            <div class="left">
                                <v-chip
                                
                                :class="`ma-2 `"
                                :color="project.statusColor"
                                text-color="white" 
                                >
                                <v-avatar left>
            <v-img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png"></v-img>
                                </v-avatar>
                                {{project.status}}
                            </v-chip> 
                            </div>
                              
                        </v-flex>
                      <v-divider color="black"></v-divider>

                </v-layout>
            </v-card>
          

            
    </v-container>

    
</div>  
</template>

<script>
export default {
    data(){
        return{
            dialog:false,
                title: "", 
                content:"",
                date: null,
                inputRules:[
                    v => v.length >= 3 || 'meinmium length in 3 charcters'
                ],
           
            projects:[
                {title:"ayman naser eddin",  date:"1/3/2019"   , content: "test" , pesrson: "ayman naser eddin",  status:"complets"    ,statusColor:"primary"  },
                {title:"nour naser eddin" ,  date:"2/4/2019"   , content: "test" , pesrson: "ayman naser eddin",  status:"no-complets" ,statusColor:"red"      },
                {title:"alaa naser eddin" ,  date:"12/3/2019"  , content: "test" , pesrson: "ayman naser eddin",  status:"waiting"     ,statusColor:"warning"  },
                {title:"kamal naser eddin",  date:"3/5/2019"   , content: "test" , pesrson: "ayman naser eddin",  status:"complets"    ,statusColor:"primary"  },
                {title:"moaz naser eddin ",  date:"5/2/2019"   , content: "test" , pesrson: "ayman naser eddin",  status:"waiting"     ,statusColor:"warning"  },




            ]
        }
        

        },
        methods:{
            sortBy(prop){
                this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
            }
    }
}
</script>

<style>
.project.complets{
    border-left:5px solid #1976d2
}
.project.no-complets{
    border-left:5px solid red
}
.project.waiting{
    border-left:5px solid #fb8c00
}

</style>