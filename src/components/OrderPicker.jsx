import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

const OrderPicker = ({ order, setOrder }) => {
  return (
    <View>
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => setOrder(itemValue)
      }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highestRating" />
        <Picker.Item label="Lowest rated repositories" value="lowestRating" />
      </Picker>
    </View>
  )
}

export default OrderPicker;