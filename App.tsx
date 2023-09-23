import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/commonStyles';
import {Ball} from './components/ball';

let timer: number;
let upForce: number;
let newSpeed: number;
let newPosY: number;

function App() {

  const [gravity, setGravity] = useState(0.98);
  const [force, setForce] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    function applyGravity() {
      upForce = force - gravity;
      upForce = upForce < 0 ? 0 : upForce;
      setForce(upForce);

      newSpeed = velocity + force - gravity;
      setVelocity(newSpeed);

      newPosY = posY + newSpeed;
      if(newPosY < 0) {
        newPosY = 0;
        setVelocity(0);
      }

      setPosY(newPosY);

    }

    clearTimeout(timer)
    timer = setTimeout(applyGravity, 30)
  }, [gravity, force, velocity, posY]);

  function handleForceBnt() {
    setForce(7)
  }

  return (
    <View style={styles.container}>

      <View style={styles.area}>
        <Ball posY={posY} />
      </View>

      <View style={styles.control}>

        <View>
          <Text style={styles.controlText}>Força: {force.toFixed(2)}</Text>
          <Text style={styles.controlText}>Velocidade: {velocity.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceBnt}
        >
          <Text>Pular</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default App;