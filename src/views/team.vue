<template>
  <div>
      <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
          <span>the person is added in the database</span>
          <v-btn icon @click="snackbar = false">
              <v-icon>mdi-close</v-icon>
          </v-btn>
      </v-snackbar>
   <h1 class="subheading grey--text text-capitalize">team page</h1>
    <v-container class="my-5">

        <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="success">add new persone</v-btn>
            </template>
            <v-card>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                <v-card-title>Add New persone</v-card-title>
                <v-card-text>
                    <v-form ref="form" class="px-2">
                        <v-text-field  v-model="name"   label="name"   prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                        <v-text-field  v-model="role"   label="role"   prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                         <v-col cols="12">
                            <v-select v-model="color" :items="colors" label="Color"></v-select>
                        </v-col>
                        <v-text-field  v-model="avtar"  label="avatr"  prepend-icon="mdi-pencil" :rules="inputRules"></v-text-field> 
                        <!-- <v-menu v-model="menu" max-width="290px" min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field :value="date" label="Pdue date"  prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRulesPiker"></v-text-field>
                            </template>
                            <v-date-picker scrollable v-model="date"></v-date-picker>
                        </v-menu> -->
                         <v-spacer></v-spacer>
                         <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
                         <v-btn text color="primary" @click="sumbitData" :loading="isLoading">Add</v-btn>

                    </v-form>
                </v-card-text> 
            </v-card>
        </v-dialog>

        <v-card flat class="pa-4">
            <v-card-text>my project</v-card-text>
            <v-layout row wrap>
                <v-flex x12 sm6 md4 lg3 xlg2 v-for="team in team" :key="team.id">
                    <v-expansion-panels>
                        <v-expansion-panel  class="pa-2">
                            <v-expansion-panel-header  dark :class="`text-capitalize white--text ${team.color}`">{{team.name}}</v-expansion-panel-header>
                            <v-expansion-panel-content>             
                                <v-card flat>
                                    <v-card-text class="pa-3">
                                        <v-responsive>
                                            <v-avtar>
                                                <v-img :src="team.avtar"></v-img>
                                            </v-avtar>
                                        </v-responsive>
                                        <div class="font-weight-bold">project by {{team.name}}</div>
                                        <div class="subheader">the role : {{team.role}}</div>
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-flex>
            </v-layout>
            
        </v-card>
        
           
      <v-layout row wrap>
          <v-flex v-for="team in team" :key="team.name" xs12 sm6 md4 lg3 xlg2>
              <v-card dark class="text-center ma-3">
                  <v-responsive >
                      <v-avatar size="100" color="red" class="ma-3 pa-1">
                          <v-img :src="team.avtar"></v-img>
                      </v-avatar>
                  </v-responsive>
                  <v-card-title justify-center class="text-capitalize">
                      <div class="subheading">{{team.name}}</div>
                      <div class="grey--text">{{team.role}}</div>
                  </v-card-title>
                      <v-btn class="ma-4" color="primary">
                          <v-icon >mdi-message</v-icon>
                          <span>message</span>
                      </v-btn>
              </v-card>
          </v-flex>
      </v-layout>



  <!-- <code class="ma-4" style="display:block;background:#222;color: #FFF;border-radius: 0;border: 0;padding: 1rem 2rem;margin: -1.5rem -1.5rem 1.5rem -1.5rem;">
            <span style="color:#C586C0;">import</span> { <span style="color:#9CDCFE" class="ng-binding">mdiCommentProcessing</span> } <span style="color:#C586C0;">from</span> <span style="color:#CE9178;">'<a style="color:#CE9178;" href="https://www.npmjs.com/package/@mdi/js">@mdi/js</a>'</span>;
            <a style="float:right;color:#FFF" href="https://dev.materialdesignicons.com/getting-started/react" target="_blank" uib-tooltip="Using @mdi/js with @mdi/react" tooltip-placement="bottom">Learn More</a>
        </code> -->
          
    </v-container>
  </div>
</template>

<script>
    import  format  from 'date-fns/format'
    import  db from '@/fb'


     export default {
        data () {
            return {
                colors: [
                            'accent',
                            'teal',
                            'blue',
                            'error',
                            'success',
                        ],
                snackbar:false,
                isLoading:false,
                dialog:false, 
                role:"",
                name:"",
                avtar:"",
                color:"",
                title: "", 
                content:"",
                date: null,
                menu: false,
                inputRules:[
                    v => !!v || 'the feild is required',

                    v => v.length >= 3 || 'meinmium length in 3 charcters'
                ],
                inputRulesPiker:[
                    v => !!v || 'the feild is required',
                ],
           
                lorem : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore repudiandae quos, sint hic dolores ab reiciendis numquam optio perspiciatis magni iure earum deserunt! Eius tempore placeat harum, iusto ut qui',
                team:
                [
                    


                ]

            }
        },
    computed:{
        myProjects(){
            return this.team.filter(items => {
                return items.name == "ayman naser eddin" 
            })
        },
        formattedDate(){
            return this.date ? format(this.date, 'Do MMM YYYY') : '' ;
        }
    },
    created(){
        db.collection('team').onSnapshot( res=>{
            const changes = res.docChanges();
            changes.forEach(change => {
                if(change.type === "added"){
                    this.team.push({
                        ...change.doc.data(),
                        id:change.doc.id
                    })
                }
            })
        })
    },
    methods:{
        sumbitData(){
            this.isLoading = true ;
           if(this.$refs.form.validate()){
                const team ={
                   name  :  this.name   ,
                   role  :  this.role   ,
                   color :  this.color  ,   
                   avtar :  this.avtar  ,
                
                }

                db.collection('team').add(team).then(() => {
                     this.isLoading = false ;
                     this.dialog = false;
                     this.snackbar= true;
                    console.log('addes to db ')
                })
                
           }
                this.name  = "" ;
                this.role  = "" ;
                this.color = "" ;   
                this.avtar = "" ;


        }
    }
  }
</script>

