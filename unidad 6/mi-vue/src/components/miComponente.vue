<script setup>

    //text interpolation
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
    const texto="<strong>Eres un tipo importante</strong>";
    const dynamicClass="ClaseDinamica";
    const isButtonDisabled=true;

    const objeto={
        color:"blue",
        id:"pepe",
    };

    const numero=7;

    const mostrarMensaje=(msj)=>{
        console.log(msj);
    }
    const unaURLdinamica="https://vuejs.org/";


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

    const manejadorClick =(boton) =>{
        console.log ("pulsado el botón "+boton);
    };

    const manejadorEnvio=()=>{
        console.log ("formulario enviado");
    }

    let contador=0;
    const incrementaContador=()=>{
        contador++;
        console.log(contador);
    };

    //Now, contadorReactivo a reactive variable (it's really an object)
    import {ref} from 'vue';
    let contadorReactivo=ref(0);    
    const incrementaContadorReactivo=()=>{
        contadorReactivo.value++;   //remember, now it's an object
    };

    const disminuirContadorReactivo=()=>{
        contadorReactivo.value--;   //remember, now it's an object
    };

   
    //computed properties allow to get out logic from templates
    //import {vue, computed} from 'vue';
    import {computed} from 'vue';

    //it could work as a method instead as a computed property by removing "computed" and calling calculaClase() at the reactive component, but it is recommended doing it this way as the property is cached not to be calculated again until the reactive variable make change inevitable
    const calculaClase= computed(()=>{
        if (contadorReactivo.value>0){
            return "positivo";
        }else{
            if (contadorReactivo.value<0){
                return "negativo";
            }else
                return "cero";  //class name
        }
    });

    const usuarioJubilado=computed(()=>{
        matrizEmpleados[0].situacion=="jubilado" ? "si" : "no";
    });



    //Binding classes
    let isActive=ref(false);    //if not defined as a reactive variable, when modified, changes won't 
    let error=ref(null);    //if not defined as a reactive variable, when modified, changes won't be translated to HTML code
    const cambiarClase=()=>{
        isActive.value=!isActive.value;
    };


    import{reactive} from 'vue';
    //reactive takes an object and returns a reactive version of it
    const classObject = reactive({
        active: false,
        texDng: false
    });

    const cambiarDosClases=()=>{
        classObject.active=!classObject.active;
        classObject.texDng=!classObject.texDng;
    };

    const cambiarDosClasesComputada = computed(() => ({
        active: isActive.value && !error.value,
        'text-danger': error.value && error.value.type === 'fatal'
    }));
    
</script>


<template>
    <div class="p-20 borde">
        <!--Text interpolation with {{  }}-->
        <h1> Hola {{ nombre.toUpperCase() }}</h1>   <!--With JS you've have to select element and replace contentText property value-->

        <!-- Directives v-whatever: -->
        <h2 v-bind:style="colorAzul">{{ msg }}</h2>  <!--This is the way of using inline styles v-bind: ....It can be replaced by : -->
        <a :href="unaURLdinamica">Un enlace</a>
        <p :style="`color:${matrizColores[1]}`">{{ msg2 }}</p>  <!--This is the way of using inline styles v-bind: ..... It can be replaced by : -->
        <p v-html="texto" :class="dynamicClass"></p>  <!--This way, HTML tags within "text" are interpreted and Class is dynamically provided-->
        <button :disabled="isButtonDisabled">Dime más...</button>

        <p v-bind="objeto"></p> <!--Several properties can be assigned at same time by using an object containing these properties-->
        

        <!--Expressions can be used within moustaches inside or outside HTML tags-->
        <p>{{  disponible ? ' y ¡estoy disponible!' : ' lo siento, no estoy disponible :(' }}</p>
        <p :id="`elemento-${numero}`">{{ numero+1 }}</p>

        <!--Functions can be used within moustaches-->
        <p>{{ mostrarMensaje("un texto") }}</p>


        <!-- Statements don't work inside moustaches
            An expression is a snippet of code that evaluates to a value. A statement is a snippet of code that performs an action. If, for, let...are statements
           
            <p> {{  if (activo){ return "estoy activo" } }}</p> -> it doesn't work--> 

        <!--Directives: Conditional sentences-->
        <p v-if="contratar">Si tiene usted algún problema y me encuentra, quizás pueda contratarme</p>
        <p v-else="!contratar">No acepto contrataciones</p>     <!-- v-else must follow v-if --> <!-- It is also available v-else-if -->

        <!--Directives: Loops-->
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
        
        <!--Events-->
        <div>
            <button v-on:click.left="manejadorClick('izquierdo')">Botón izquierdo</button>
            <button v-on:click.middle="manejadorClick('central')">Botón central</button>
            <button @click.right.prevent="manejadorClick('derecho')">Botón derecho</button>
        </div>

        <div>
            <form @submit.prevent="manejadorEnvio">
                <label>Dime algo</label>
                <input type="text" name="comentarios">
                <button>enviar</button>
            </form>
        </div>

        <!--Reactivity-->
        <!--contador variable will show its value when html was rendered, but it won't change unless reactivity is allowed. Ref is one of the ways of doing it -->
        <!-- ref library needs to be summoned-->
        <div>
            <button @click="incrementaContador">{{ contador }}</button>     <!--no reactive variable-->
            


            <!--computed properties
                in-template operations are meant for simple operations. Ideal scenario is to keep as much logic out of templates. It makes code easier to read and mantain. That's were computer properties come out.
            -->
            <button @click.left="incrementaContadorReactivo" @click.right.prevent="disminuirContadorReactivo" :class="calculaClase">{{ contadorReactivo }}</button>
<!--            <button @click.left="incrementaContadorReactivo" @click.right.  prevent="disminuirContadorReactivo" :class="contadorReactivo>0 ? 'positivo' : 'negativo'">{{ contadorReactivo }}</button>     -->
        </div>
        <p>{{ usuarioJubilado }}</p>


        <!--Binding classes-->
        <button @click="cambiarClase">Cambiar clase</button>
        <div class="static" :class="{ active:isActive }"></div>
        <button @click="cambiarDosClases">Cambiar clase 2</button>
        <div :class="classObject"></div>
        <div :class="cambiarDosClasesComputada"></div>
        <div :class="[isActive, error]"></div>



<!--        <p v-for="(color,indice) in matrizColores" :key="indice" >{{ indice }} {{ color }}</p> Key must be provided so vue can locate the node. It must be a unique value, so index is not a good idea, as it would repeat next time we have an array-->
    </div>
</template>

<style>
    .borde{
        border:1px solid lightgrey;
    }

    .p-20{
        padding: 20px;
    }

    .positivo{
        color:green;
    }

    .negativo{
        color:red;
    }

    .cero{
        color: blue;
    }
</style>