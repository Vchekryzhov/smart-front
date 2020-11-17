
<template>
      <v-main>
      <v-container id='main-container'>
        <v-row
        id='first-main'

        class='main-card'>
          <v-col
            width="300"
            cols=columnCount
          >
          <v-lazy
            v-if="kLogoDelay"
            :options="{
              threshold: .00000001
            }"
            min-height="50"
            transition="fade-transition"
          >
            <img v-if="kLogoDelay" id="main-logo" src="../assets/img/logo.png" alt="avatar" />
          </v-lazy>
                                  <br />
                                  <br />
            <v-lazy
              v-if="logoDelay"
              :options="{
                threshold: .00000001
              }"
              min-height="200"
              transition="fade-transition"
            >
            <figure>
              <img src="../assets/img/nti-logo.svg" alt="avatar" />
            </figure>
            </v-lazy>
                        <br />
                        <br />
                        <br />
                        <br />
            <v-lazy
              v-if="titleDelay"
              :options="{
                threshold: .00000001
              }"
              min-height="200"
              transition="fade-transition"
            >
            <h1>
              Развитие сервиса персональных траекторий развития — создание модели, анализирующей образовательные и карьерные цели человека
            </h1>
          </v-lazy>
          </v-col>
        </v-row>
        <v-row
        id='second-main'
        class='main-card'>
          <v-col
            width="300"
            cols=columnCount
          >
            <div >
              <p>
                <b>Технология SMART (СМАРТ)</b> — современный подход к постановке работающих целей. Система постановки smart — целей позволяет на этапе целеполагания обобщить всю имеющуюся информацию, установить приемлемые сроки работы, определить достаточность ресурсов, предоставить всем участникам процесса ясные, точные, конкретные задачи.

              </p>
                    <v-lazy
                      :options="{
                        threshold: .1
                      }"
                      min-height="200"
                      transition="fade-transition"
                    >
                <v-sparkline
                  :value="value"
                  :gradient="gradient"
                  :smooth="radius || false"
                  :padding="padding"
                  :line-width="width"
                  :stroke-linecap="lineCap"
                  :gradient-direction="gradientDirection"
                  :fill="fill"
                  :type="type"
                  :auto-line-width="autoLineWidth"
                  auto-draw
                ></v-sparkline>
              </v-lazy>
            <p>
                <b>SMART</b> является аббревиатурой, расшифровка которой: Specific, Measurable, Achievable, Relevant, Time bound. Каждая буква аббревиатуры SMART означает критерий эффективности поставленных целей. Рассмотрим каждый критерий smart цели более подробно.

              </p>

            </div>
          </v-col>
        </v-row>
        <v-row
        id='third-main'
        class='main-card'>
          <v-col
            width="300"
            cols=columnCount
          >
          <div >
            <p>
              <span>
                S
              </span>
              <br />
              <b>Specific</b> —<br /> конкретной. Конкретика означает, что результатом формулировки цели
              является ответ на вопрос: «что сделать?». Варианты: Чего добиться? Где? Когда? С кем?
              В каком объеме? и т.д. В постановке цели не должно быть слов, не несущих смысловой нагрузки
              (оптимальный, достойный и т.п.), никаких расплывчатых и двусмысленных формулировок.
            </p>
            <p>
              <span>
                M
              </span>
              <br />
              <b>Measurable</b> —<br /> измеримой. Как ты узнаешь, что уже достиг своей цели? И в какой степени
              ты ее достиг? Если речь идет о количественной измеримости, нужно оперировать цифрами, если о
              качественной - к формулировке цели следует приложить задание.
            </p>
            <p>
              <span>
                A
              </span>
              <br />
              <b>Achievable</b> —<br /> достижимой. Например, цель "стать профессионалом в хирургии за 3 месяца"
              едва ли достижима. В этом пункте важно трезво учесть профессиональные и личные качества, при этом можно
              себе ставить достаточно высокую «планку» и ориентироваться на напряженный ритм работы.
            </p>
            <p>
              <span>
                R
              </span>
              <br />
              <b>Result-oriented</b> —<br /> ориентированной на Результат. А не на процесс.
              <br />
              <img src="../assets/img/goal.jpg" alt="avatar" />
            </p>
            <p>
              <span>
                T
              </span>
              <br />
              <b>Time-limited</b> — <br /> ограниченной по времени. При постановке цели важно определить конечный
              срок, а также учесть, что формулировка вроде
              «выполнить в течение 30 дней» ориентирует скорее на процесс, чем на результат.
              А цель "до 17 марта обзвонить и проинформировать 100 клиентов из базы данных,
              родить двух детей до 30 лет" - дает разумное ограничение по времени.
              Важно указать крайний срок ее исполнения (dead-line).
            </p>

            </p>
          </div>
          </v-col>
        </v-row>
        <v-row
        id='four-main'
        class='main-card'>
          <v-col
            width="300"
            cols=columnCount
          >
            <div >
              <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" class="little mXlbn"><path d="M130 65.7201v-1.4402c-28.809-.9002-41.9439-1.5843-52.4411-11.837C67.3137 41.9471 66.5845 28.7779 65.7202 0h-1.4404c-.9003 28.8049-1.5845 41.9471-11.8387 52.4429C41.9439 62.6956 28.7819 63.4157 0 64.2799v1.4402c28.8089.9002 41.9439 1.5843 52.4411 11.837C62.6953 88.0529 63.4155 101.222 64.2798 130h1.4404c.9003-28.805 1.5935-41.9471 11.8387-52.4429C88.0561 67.3044 101.218 66.5843 130 65.7201z" fill="white"></path></svg>
                <h2>
                  ВВЕДИ СВОЮ ЦЕЛЬ
                </h2>
              <v-textarea
                solo
                name="input-7-4"
                label="до 17 марта обзвонить и проинформировать 100 клиентов из базы данных"
                auto-grow
              ></v-textarea>
              <p>

              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                color="secondary"
                @click="loader = 'loading'"
              >
                ОТПРАВИТЬ
              </v-btn>
                <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" class="big mXlbn"><path d="M130 65.7201v-1.4402c-28.809-.9002-41.9439-1.5843-52.4411-11.837C67.3137 41.9471 66.5845 28.7779 65.7202 0h-1.4404c-.9003 28.8049-1.5845 41.9471-11.8387 52.4429C41.9439 62.6956 28.7819 63.4157 0 64.2799v1.4402c28.8089.9002 41.9439 1.5843 52.4411 11.837C62.6953 88.0529 63.4155 101.222 64.2798 130h1.4404c.9003-28.805 1.5935-41.9471 11.8387-52.4429C88.0561 67.3044 101.218 66.5843 130 65.7201z" fill="white"></path></svg>
            </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
        <v-footer
    padless
  >
    <v-card
      flat
      tile
      class="orange lighten-2 lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        SMART / SMARTER — это мнемоническая аббревиатура, используемая в менеджменте и проектном управлении для определения целей и постановки задач. Схема постановки целей SMART создана Джорджем Дораном (англ. George T. Doran) в 1981 году.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>KOVALEV.TEAM</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </v-main>
</template>

<script>
import MainCardComponent from "@/components/node/MainCardComponent";
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
	name: "Main",
  components: {
		MainCardComponent
	},
	async mounted() {

    setTimeout(() => {  this.kLogoDelay = true }, 700);
    setTimeout(() => {  this.logoDelay = true }, 1800);
    setTimeout(() => {  this.titleDelay = true }, 2200);
	},
	data: () => ({
    nodes: [],
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    kLogoDelay: false,
    titleDelay: false,
    logoDelay: false,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    loader: null,
    loading: false,
	}),
	computed: {
    firstStyle() {
      return {
        "background-color": "black",
      };
    }
	},
   watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },

};
</script>

<style scoped lang="scss">
  #main-container{
    max-width: 100%;
    max-height: 100%;
    min-height: 100%;
    padding: 0;
  }
  .main-card{
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 6% 6% 0% 0% / 7% 7% 0% 0%;
    padding-bottom: 100px;
    margin-bottom: -100px;
    div{
      position: relative;
      width: 80%;
      min-height: 93vh;
      margin-left: auto;
      margin-right: auto;
      z-index: 100;
    }
  }

  #main-logo{
    width: 140px;
    height: 70px;
    margin-left: 10%;
  }

  #main-container{
    background-color: black;
  }

  #first-main{
    background-color: black;
    color: white;
    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
    figure{
      margin-left: auto;
      margin-right: auto;
      max-width: 80%;
    }
  }
  #second-main{
    background-color: white;
    div{
      margin-top: 30px;
    }
    p{
      font-size: 30px;
    }
  }
  #third-main{
    background: rgb(253,29,29);
    background: linear-gradient(153deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 11%);
    p{
      width: 15%;
      float: left;
      margin-left: 50px;
      text-align: justify;
      span{
        text-align: center;
        font-size: 120px;
      }
      img{
        width: 100%;
        opacity: 0.9;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% ;
        margin-top: 20px;
      }
    }
  }
  #four-main{
    background-color: black;
    color: white;
    h2{
      text-align: center;
    }
    div.v-textarea{
      margin-top: 20px;
      min-height: 0;
    }
    p{
      text-align: center;
    }
    svg.little{
      width: 200px;
      height: 200px;
    }
    svg.big{
      width: 400px;
      height: 400px;
      position: relative;
      margin-left: 70%;
    }
  }
</style>
