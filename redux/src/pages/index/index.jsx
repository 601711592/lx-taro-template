<%if (framework === 'react') {-%>
import { Component } from 'react'
import { connect } from 'react-redux'
<%} else if (framework === 'nerv') { -%>
import Nerv, { Component } from 'nervjs'
import { connect } from 'nerv-redux'
<%}-%>
import { View, Button, Text } from '@tarojs/components'
import { ConnectState } from '@/models/connect';


import './index.<%= cssExt %>'

<% if (locals.typescript) {-%>

type PageProps = {}

type PageState = {}

<%}-%>

class <%= _.capitalize(pageName) %> extends Component<PageState, PageProps> {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='<%= pageName %>'>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default connect((state: ConnectState) => state.global)(<%= _.capitalize(pageName) %>)

