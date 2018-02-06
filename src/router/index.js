import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/common/common'
import Footer from '@/components/common/footer'
import Index from '@/components/common/index'
//	pages
import Consultation from '@/components/pages/consultation'
import Stu from '../components/pages/stu'
import Stu_err from '@/components/pages/stu_err'
import Tea from '@/components/pages/tea'
import Tea_err from '@/components/pages/tea_err'
//	pages/common
import Schedule from '@/components/pages/common/Schedule'
//	pages/Tea
import TeaStu from '@/components/pages/tea/TeaStu'
import TeaColleague from '@/components/pages/tea/Colleague'
import TeaClassRecord from '@/components/pages/tea/ClassRecord'
import TeaWorkRecord from '@/components/pages/tea/WorkRecord'
//	pages/Stu
import StuGood from '@/components/pages/stu/GoodStu'
import StuScore from '@/components/pages/stu/Score'
import StuSchedule from '@/components/pages/stu/StuSchedule'
import StuTeacher from '@/components/pages/stu/Teacher'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '*',
		redirect: '/index',
	},
	{
		path: '/index',
		name: 'common',
		component: Common,
		children:[
		{
			path: '',
			component: Index,
		},
		{
			path: '/stu',
			name: 'stu',
			component: Stu,
			children: [
			{
				path: '',
				redirect: '/stu-schedule',
			},
			{
				path: '/stu-schedule',
				name: 'stu-schedule',
				component: Schedule,
			},
			{
				path: '/stu-stu',
				name: 'stu-stu',
				component: StuGood,
			},
			{
				path: '/stu-tea',
				name: 'stu-tea',
				component: StuTeacher,
			},
			{
				path: '/stu-score',
				name: 'stu-score',
				component: StuScore,
			}
			]
		},
		{
			path: '/stu_err',
			name: 'stu_err',
			component: Stu_err,
		},
		{
			path: '/tea',
			name: 'tea',
			component: Tea,
			children: [
			{
				path: '',
				redirect: '/schedule',
			},
			{
				path: '/schedule',
				name: 'schedule',
				component: Schedule,
			},
			{
				path: '/tea-stu',
				name: 'schedule',
				component: TeaStu,
			},
			{
				path: '/tea-colleague',
				name: 'colleague',
				component: TeaColleague,
			},
			{
				path: '/work-record',
				name: 'work-record',
				component: TeaWorkRecord,
			},
			{
				path: '/class-record',
				name: 'class-record',
				component: TeaClassRecord,
			},
			]
		},
		{
			path: '/tea_err',
			name: 'tea_err',
			component: Tea_err,
		},
		{
			path: '/consultation',
			name: 'consultation',
			component: Consultation,
		}
		]
	},
	{
		path: '/footer',
		name: 'footer',
		component: Footer
	}
	]
})
