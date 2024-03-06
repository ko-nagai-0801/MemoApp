import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      {/* header */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {/* メモの外枠 */}
      <View>

        {/* メモのアイテム */}
        <View>
          {/* テキスト */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年4月1日 10:00</Text>
          </View>
          {/* バツボタン */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモのアイテム */}
        <View>
          {/* テキスト */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年4月1日 10:00</Text>
          </View>
          {/* バツボタン */}
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモのアイテム */}
        <View>
          {/* テキスト */}
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年4月1日 10:00</Text>
          </View>
          {/* バツボタン */}
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      {/* +ボタン */}
      <View>
        <Text>+</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467fd3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default Index
