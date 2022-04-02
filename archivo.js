Vue.createApp({
    data() {
      return {
        information: {
          name: "============== LA FLDSMDFR - VACATION TRIP ==============",
          id: "<< Página para ver que actividades se pueden hacer en vacaciones >>"
        },
        interests: ["Camping", "Water Parks", "Beach", "Theme Park", "Waterfalls"],
        
        // variable para mensaje con v-model 
        message:'',
        
        // variable para if con boton
        done:false,
      
      };
    }
  }).mount("#app");
