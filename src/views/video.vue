<template>
  <div >
    <h1 class="subheading grey--text text-capitalize">home page</h1>
    <v-container class="my-5">
      <v-btn dark flat color="blue" class="my-5 text-capitalize"
        >add new post
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4  lg3 xlg2 v-for="item in playlist" :key="item.id">
          <v-card dark class="ma-2 rtl">
            <v-responsive class="text-center ma-3 pt-3">
              <v-avatar size="100">
                <v-img :src="item.snippet.thumbnails.default.url"></v-img>
              </v-avatar>
            </v-responsive>
            <v-card-title class="pa-2">
              <div class=" red--text subheader">
                {{item.snippet.channelTitle}}
              </div>
            </v-card-title>
            <v-card-text>
            {{item.snippet.title}}
             <v-dialog  v-model="dialog"  hide-overlay transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                            <v-btn  block color="primary" v-on="on" >شاهد الفيديو </v-btn>
                        </template>
                        <v-card>
                            <v-toolbar dark color="primary">
                                 <v-toolbar-items>                                      
                                        <v-btn dark text @click="dialog = false">Save</v-btn>
                                        <v-btn dark text @click="dialog = false" icon>
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-toolbar-items>
                                    <v-toolbar-title class="rtl">
                                        {{item.snippet.title}}
                                    </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-toolbar-title class="rtl">
                                        {{item.snippet.title}}
                                    </v-toolbar-title>                            
                                </v-toolbar>
                            <v-card-text   class=" text-center">
                                <iframe  class="ma-3 text-center" :src="`https://www.youtube.com/embed/${item.id}`" 
                                >
                                </iframe>
                            </v-card-text>
                        </v-card>
                    </v-dialog>

              <!-- {{item.snippet.description}}  -->
              <div class="blue--text subheader">{{item.snippet.publishedAt}}</div>         
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      card_text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore repudiandae quos, sint hic dolores ab reiciendis numquam optio perspiciatis magni iure earum deserunt! Eius tempore placeat harum, iusto ut qui',
      // alignmentsAvailable: [
      //   'start',
      //   'center',
      //   'end',
      //   'baseline',
      //   'stretch',
      // ],
      alignment: 'center',
      // dense: false,
      // justifyAvailable: [
      //   'start',
      //   'center',
      //   'end',
      //   'space-around',
      //   'space-between',
      // ],
      justify: 'center',
      playlist:[],
      dialog:false
    };
  },
  created() {
    this.getPlaylist();
  },
  methods: {
    getPlaylist: function() {
      axios
        
          // 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLfY-m4YMsF-OM1zG80pMguej_Ufm8t0VC&key=AIzaSyCnGeoYhG3HXL6j8bIH-mwgwCHYyqdBW4s')
          .get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: "snippet,contentDetails",
          // forUsername: "UC4gEsWaYy8V09Ej2TyNkLcg",
          // channelId:"UC4gEsWaYy8V09Ej2TyNkLcg",
          id:"C82JumO4cOU",
        //   playlistId:"PLgVz16tL0L-vilcFoUvxKsT6tqM_gSCt7",
        //   maxResults:"26",
          // client_id:"292824132082",
          key: "AIzaSyDjC7e6bIR1tUWxQYengZNO8SY1VMBHraA" 
        }
      })
          .then (response => {
            this.playlist = response.data.items;
            console.log(response.data.items); 
          }) 
        
        .catch(error => {
          console.log('Error: ', error);
        });
         
    }
  }
}
</script>
<style >
.rtl{
  direction :rtl;
  font-family: "Cairo script=arabic rev=2";
}
</style>
