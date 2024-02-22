<script setup>
    const nombre="pepito";
    defineProps({
        msg: {
        type: String,
        required: true
        },
        msg2:{
            type: String,
            required: true
        }
    });
    const colorAzul="color:blue";
    const matrizColores=["blue", "red", "green"];
    const disponible=true;
    const contratar=true;
    const habilidades=true;
    const matrizHabilidades=["vue", "JavaScript", "JQuery", "PHP"];
    const objetoEmpleado={
        nombre: "pepe",
        id:3,
        edad: "25",
        puesto: "encargado",
        situacion: "activo"
    };

    const matrizHabilidadesDiseño=["CSS", "SASS", "Tailwindcss"];
    let masHabilidades=false;

    const matrizEmpleados=[
        {
            nombre: "Felipe",
            id:1,
            edad: "35",
            puesto: "programador",
            situacion: "activo"
        },{
            nombre: "Paco",
            id:2,
            edad: "65",
            puesto: "jefe",
            situacion: "jubilado"
        }
    ];

    const manejadorClick =() =>{
        console.log ("pinchaste aquí");
    }
</script>


<template>
    <div class="p-20 borde">
        <h1> Hola {{ nombre.toUpperCase() }}</h1>   <!--With JS you've have to select element and replace contentText property value-->
        <h2 :style="colorAzul">{{ msg }}</h2>  <!--This is the way of using inline styles v-bind: .... is replaced by : -->
        <p :style="`color:${matrizColores[1]}`">{{ msg2 }}</p>  <!--This is the way of using inline styles v-bind: .... is replaced by : -->
        
        <!-- <p> {{  if (activo){ return "estoy activo" } }}</p> -> it doesn't work {{  }} needs JavaScript expressions--> 
        <!--In general, an expression is a snippet of code that evaluates to a value. A statement is a snippet of code that performs an action. If, for, let...are statements-->

        <p>{{  disponible ? ' y ¡estoy disponible!' : ' lo siento, no estoy disponible :(' }}</p>
        <p v-if="contratar">Si tiene usted algún problema y me encuentra, quizás pueda contratarme</p>
        <p v-else="!contratar">No acepto contrataciones</p>     <!-- v-else must follow v-if --> <!-- It is also available v-else-if -->

        <div v-show="habilidades==true">
            <p>Mire, se hacer un montón de cosas</p>
            <ul>
                <li v-for="(valor,indice) of matrizHabilidades">{{ indice+1 }}:{{ valor }}</li>
            </ul>
        </div>
     
        <ul>
            <li v-for="(valor, nombreCampo) in objetoEmpleado" :key="nombreCampo"> {{ nombreCampo }}:{{ valor }}</li>
        </ul>
        <p>Los empleados activos, además de mi, son...</p>
        <ul>
            <template v-for="empleado in matrizEmpleados" :key="empleado.id">  <!--Templates are not rendered, they are not HTML tags-->
                <li v-if="(empleado.situacion)=='activo'"> {{ empleado.nombre }}, {{ empleado.edad }}, {{ empleado.puesto }}</li>
            </template>
        </ul>
        <button v-on:click="manejadorClick">Pincha aquí para saber más de mí</button>
        <button @:click="manejadorClick">Pincha aquí para saber más de mí</button>

<!--        <p v-on:click="manejadorClick">Pincha aquí para saber más de mí</p>
        <ul v-if="masHabilidades">
            <li v-for="valor of matrizHabilidadesDiseño" :key="valor">{{ valor }}</li>
        </ul>-->


<!--        <p v-for="(color,indice) in matrizColores" :key="indice" >{{ indice }} {{ color }}</p> Key must be provided so vue can locate the node. It must be a unique value, so index is not a good idea, as it would repeat next time we have an array-->
    </div>
</template>

<style>
    .borde{
        border:1px solid grey;
    }

    .p-20{
        padding: 20px;
    }
</style>