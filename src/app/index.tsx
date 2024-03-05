import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
