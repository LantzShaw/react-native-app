# react native app

```sh
# 可以选择模板
expo init

# or

npx create-expo-app -t expo-template-blank-typescript
```

### Base

```
1. 不能这这样设置border: '1px solid #000', 需要单独设置, 例如这样: borderWidth: 1, borderColor: 'red'

```

### Records

**使用与不使用 StyleSheet 的区别**

```sh
当界面元素更新的时候，内嵌样式都要重新被计算一次，但是使用 StyleSheet 之后，这部分样式就不需要被重新计算。

Making a stylesheet from a style object makes it possible to refer to it by ID instead of creating a new style object every time.
It also allows to send the style only once through the bridge. All subsequent uses are going to refer an id (not implemented yet).

但是，在某些情况下你可能依然需要内嵌样式，例如我项目中的这个例子:

interface Props {
  status?: number;
}

const StatusTag = (props: Props) => {
  const statusColor = ['#4CAF50', '#F44336', '#448AFF', '#FF5722'];
  const statusText = ['草稿', '评价中', '评价完成', '已发布'];
  return (
    <Text
      style={[
        styles.tag,
        {
          color: statusColor[props.status - 1],
          borderColor: statusColor[props.status - 1],
        },
      ]}>
      {statusText[props.status - 1]}
    </Text>
  );
};
```

```sh
# 参考文章: https://profy.dev/article/react-folder-structure

─ src/
    ├── features/
    │   ├── todos/
    │   ├── projects/
    │   ├── ui/
    │   └── users/
    └── pages/
        ├── create-project.js
        ├── create-todo.js
        ├── index.js
        ├── login.js
        ├── privacy.js
        ├── project.js
        ├── signup.js
        └── terms.js
```
