import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      {/* メモの外枠 */}
      <View>
        {/* メモのアイテム */}
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      {/* +ボタン */}
      <CircleButton>
      <Icon />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
