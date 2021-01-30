

# 设计模式 Design Patterns [dɪˈzaɪn] ['pætənz]

使用 ES6 实现 23 种经典设计模式 (GoF)。

示例原则：

* 极简 Minimalism [ˈmɪnɪməlɪzəm]
* 抽象 Abstract [ˈæbstrækt]


![Design Patterns](./design-patterns.svg)

### 📗 创建模式 Creational Patterns [kri:ˈeiʃənəl] ['pætənz]

#### 单例模式 Singleton [ˈsɪŋɡltən] 

  保证一个类仅有一个实例。
#### 工厂模式 Factory [ˈfæktri] 

  让其子类自己决定实例化哪一个工厂类。 
#### 抽象工厂模式 Abstract Factory [ˈæbstrækt] [ˈfæktri] 

  创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。
#### 建造者模式 Builder [ˈbɪldə(r)] 

  使用多个简单的对象一步一步构建成一个复杂的对象。
#### 原型模式 Prototype [ˈprəʊtətaɪp] 

  用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

### 📘 结构模式 Structural Patterns [ˈstrʌktʃərəl] ['pætənz]

#### 适配器模式 Adapter [ə'dæptə] 

  将一个类的接口转换成另外一个需要的接口。作为两个不兼容的接口之间的桥梁。
#### 桥接模式 Bridge [brɪdʒ] 

  将抽象部分与实现部分分离，使它们都可以独立的变化。
#### 组合模式 Composite [ˈkɒmpəzɪt] 

  将对象组合成树形结构以表示"部分-整体"的层次结构。
#### 装饰模式 Decorator [ˈdekəreɪtə(r)] 

  动态添加/覆盖对象现有对象中的行为。
#### 外观模式 Facade [fəˈsɑːd] 

  定义了一个高层接口，这个接口使得这一子系统更加容易使用。
#### 享元模式 Flyweight [ˈflaɪweɪt] 

  运用共享技术有效地支持大量细粒度的对象。
#### 代理模式 Proxy [ˈprɒksi] 

  为其他对象提供一种代理以控制对这个对象的访问。
### 📙 行为模式 Behavioral Patterns [bi'heivjərəl] ['pætənz]

#### 职责链模式 Chain Of Responsibility [tʃeɪn] [əv] [rɪˌspɒnsəˈbɪləti] 

  将多个对象连接成一条链，沿着这条链传递请求，并处理该请求。
#### 命令模式 Command [kəˈmɑːnd] 

  将一个请求封装成一个对象，从而使您可以用不同的请求对实例进行参数化。
#### 解释器模式 Interpreter [ɪnˈtɜːprətə(r)] 

  实现了一个表达式接口，该接口解释一个特定的上下文。
#### 迭代器模式 Iterator [ɪtə'reɪtə] 

  提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。
#### 中介者模式 Mediator [ˈmiːdieɪtə(r)] 

  提供了一个中介类处理不同类之间的通信，从而使其耦合松散。
#### 备忘录模式 Memento [məˈmentəʊ] 

  保存一个对象的某个状态，以便在适当的时候恢复对象。
#### 观察者模式 Observer [əbˈzɜːvə(r)] 

  当一个对象被修改时，则会自动通知依赖它的对象。
#### 状态模式 State [steɪt] 

  允许对象在内部状态发生改变时改变它的行为。
#### 策略模式 Strategy [ˈstrætədʒi]

  定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
#### 模板模式 Template [ˈtempleɪt] 

  定义一个抽象类实现方法的框架，从而允许其子类实现具体的行为。
#### 访问者模式 Visitor [ˈvɪzɪtə(r)] 

  通过将方法的层次结构移动到一个对象中，将算法与对象结构分离。