import React from "react"
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  withAdaptivity,
  CellButton,
  PopoutWrapper,
  ModalDismissButton,
  Button,
  Div,
  Title,
  Cell,
  Switch
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import bridge from '@vkontakte/vk-bridge'


function App() {
  const { viewWidth } = useAdaptivity();
  const [popout, setPopout] = React.useState(null);

  const [todos] = React.useState([
    {id: 1, completed: false},
    {id: 2, completed: false},
    {id: 3, completed: false},
    {id: 4, completed: false},
    {id: 5, completed: false},
    {id: 6, completed: false},
    {id: 7, completed: false},
    {id: 8, completed: false}
  ])

  let have_on = false;
  let all_off = true;
  let stop_bit = false;

    const styles = {
      but: {
        textAlign: 'center',
        align: 'center'
      },
      title: {
        marginTop: '5px',
        marginBottom: '5px',
        textAlign: 'center'
      },
      gr: {
        margin: '0 auto 0 auto'
      }
    }

    function haveOnTest () {
      let points = 0;
      let i = 0;
      while (i < 8) {
        if (todos[i].completed === true){
          points += 1;
        }
        i++;
      }
      if (points > 0) return true;
    }

    function allOffTest () {
      let points = 0;
      let i = 0;
      while (i < 8) {
        if (todos[i].completed === false){
          points += 1;
        }
        i++;
      }
      if (points === 8) return true;
    }

     function startBit () {
      stop_bit = false;
      let i = 0;
      let timerId = setInterval(async() => {
        if (stop_bit === true){
          clearInterval(timerId)
          console.log('STOPBIT')
        }

        
        if (i === 0 && todos[0].completed === true){await bridge.send("VKWebAppFlashSe1tLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})
        if (i === 1 && todos[1].completed === true){await bridge.send("VKWebAppFlashSetLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})
        if (i === 2 && todos[2].completed === true){await bridge.send("VKWebAppFlashSetLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})
        if (i === 3 && todos[3].completed === true){await bridge.send("VKWebAppFlashSetLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})
        if (i === 4 && todos[4].completed === true){await bridge.send("VKWebAppFlashSetLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})
        if (i === 5 && todos[5].completed === true){await bridge.send("VKWebAppFlashSetLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})
        if (i === 6 && todos[6].completed === true){await bridge.send("VKWebAppFlashSetLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})
        if (i === 7 && todos[7].completed === true){await bridge.send("VKWebAppFlashSetLevel", {"level": 1})}
        await bridge.send("VKWebAppFlashSetLevel", {"level": 0})

        i++;
        if (i === 8) {i = 0};
      }, 1000);
    }


    function button1 () {
      if (todos[0].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[0].completed = true;
      } else {
        todos[0].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[0].completed)
    }
    function button2 () {
      if (todos[1].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[1].completed = true;
      } else {
        todos[1].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[1].completed)
    }
    function button3 () {
      if (todos[2].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[2].completed = true;
      } else {
        todos[2].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[2].completed)
    }
    function button4 () {
      if (todos[3].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[3].completed = true;
      } else {
        todos[3].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[3].completed)
    }
    function button5 () {
      if (todos[4].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[4].completed = true;
      } else {
        todos[4].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[4].completed)
    }
    function button6 () {
      if (todos[5].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[5].completed = true;
      } else {
        todos[5].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[5].completed)
    }
    function button7 () {
      if (todos[6].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[6].completed = true;
      } else {
        todos[6].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[6].completed)
    }
    function button8 () {
      if (todos[7].completed === false) {
        let res = allOffTest();
        if (res === true) startBit();
        todos[7].completed = true;
      } else {
        todos[7].completed = false;
        let res = allOffTest();
        if (res === true) stop_bit = true;
      }
      console.log(todos[7].completed)
    }


  //return
  return (
    <SplitLayout>
      <SplitCol>
    <View popout={popout} activePanel="popout">
      <Panel id="popout" >
      <Title level="1" weight="bold" style={styles.title}>Бит-фонарик</Title>
        <Group style={styles.gr}>

        <Cell disabled after={<Switch onClick={button1} />}></Cell>
        <Cell disabled after={<Switch onClick={button2} />}></Cell>
        <Cell disabled after={<Switch onClick={button3} />}></Cell>
        <Cell disabled after={<Switch onClick={button4} />}></Cell>
        <Cell disabled after={<Switch onClick={button5} />}></Cell>
        <Cell disabled after={<Switch onClick={button6} />}></Cell>
        <Cell disabled after={<Switch onClick={button7} />}></Cell>
        <Cell disabled after={<Switch onClick={button8} />}></Cell>


        </Group>
      </Panel>
    </View>
    </SplitCol>
    </SplitLayout>
  );
}

export default App;
