<template>
  <div class="about">
    <h1 class="subheading grey--text text-capitalize">about page</h1>
    <v-container class="my-5">
    <p class=" pa-3 pink darken-4 white--text text-justify"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fuga at eius voluptates numquam? Fugiat commodi error, reiciendis voluptatum doloremque laborum ducimus vel perferendis, nihil iusto tenetur accusantium architecto minus? </p>
    <div class=" ma-4 pa-3 text-no-wrap text-example red " style="width:280px">i love php <span class="text-left pa-4 font-weight-bold blue white--text" style="width:30px">ilove</span> javascript laravel </div>


    <v-btn fab depressed class=" ma-3 " color="primary" dark >
      <v-icon>mdi-thumb-up</v-icon>
    </v-btn>
    <v-btn fab depressed class=" ma-3 " color="red" dark >
      <v-icon>mdi-thumb-down</v-icon>
    </v-btn>
    <v-btn fab depressed class=" ma-3 " color="blue" dark >
      <v-icon>mdi-wrench</v-icon>
    </v-btn>
    <v-btn fab depressed class=" ma-3 " color="pink" dark >
      <v-icon>mdi-checkbox-marked-circle</v-icon>
    </v-btn>
    <v-btn fab depressed class=" ma-3 " color="indigo" dark >
      <v-icon>mdi-cloud-upload</v-icon>
    </v-btn>
    <v-btn fab depressed class=" ma-3 " color="black" dark >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-btn  depressed class=" ma-3 " color="black" dark >
      <v-icon left>mdi-arrow-left</v-icon>back
    </v-btn>
    <v-btn  depressed class=" ma-3 " color="black" dark >
      <v-icon left>mdi-chevron-left</v-icon>back
    </v-btn>

    <v-btn  depressed class=" ma-3 " color="black" dark >
      <v-icon left>mdi-account</v-icon>accuont
    </v-btn>

    <v-btn  depressed class=" ma-3 " color="black" dark >
      <v-icon left>mdi-pencil</v-icon>edit
    </v-btn>

    <v-btn  depressed class=" ma-3 " color="info" dark >
      <v-icon left>mdi-share</v-icon>share
    </v-btn>

    <v-btn  depressed class=" ma-3 " color="black" dark >
      <v-icon left>mdi-share-variant</v-icon>share
    </v-btn>

    <v-btn fab depressed class=" ma-3 " color="warning" dark >
      <v-icon >mdi-domain</v-icon>
    </v-btn>

    <v-btn fab  depressed class=" ma-3 " color="blue" dark >
      <v-icon >mdi-arrow-up-bold-box</v-icon>
    </v-btn>

    <v-btn fab  depressed class=" ma-3 " color="blue" dark >
      <v-icon >mdi-arrow-down-bold-box</v-icon>
    </v-btn>
    <v-btn  depressed class=" ma-3 " color="red" dark >
      <v-icon left>mdi-delete</v-icon>edit
    </v-btn>

    <v-btn fab depressed class=" ma-3 " color="red" dark >
      <v-icon >mdi-dialpad</v-icon>
    </v-btn>

    <v-btn fab depressed class=" ma-3 " color="blue" dark >
      <v-icon >mdi-message-text</v-icon>
    </v-btn>

    <v-btn fab  depressed class=" ma-3 " color="black" dark >
      <v-icon color="yellow" >mdi-folder</v-icon>
    </v-btn>

    <v-btn fab  depressed class=" ma-3 " color="red" dark >
      <v-icon >mdi-home</v-icon>
    </v-btn>
    
    



    <v-btn  fab  depressed class=" ma-3 hidden-sm-and-down " color="primary" dark >
      <v-icon large >mdi-email</v-icon>
    </v-btn>

     <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group prepend-icon="mdi-account" value="true" >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group no-action sub-group value="true" >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(admin, i) in admins" :key="i" link >
            <v-list-item-title v-text="admin[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group sub-group no-action >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(crud, i) in cruds" :key="i"  >
            <v-list-item-title v-text="crud[0]"></v-list-item-title>
            <v-list-item-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>

  </v-card>

  <divider class="mb-5"></divider>
</v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      admins: [
        ['Management', 'mdi-account'],
        ['Settings', 'mdi-settings'],
      ],
      cruds: [
        ['Create', 'mdi-plus'],
        ['Read', 'mdi-book'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }
  }
}
</script>
