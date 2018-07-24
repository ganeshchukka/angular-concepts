import { Routes } from '@angular/router';
import { ListEmployeesComponent } from '../components/employee/list-employees.component';
import { CreateEmployeeComponent } from '../components/employee/create-employee.component';
import { PostComponent } from '../components/calls/postcomponent/postcomponent.component';
import { SeriesServicesComponent } from '../components/calls/series/service.component';
import { ParllelComponent } from '../components/calls/parllel/parllel.component';
import { NodemysqlComponent } from '../components/mysql/Mysqlcrudcomponent/nodemysql.component';
import { LoginComponent } from '../components/mysql/login component/login.component';
import { StaticFileComponent } from '../components/staticFile/static.file.component';
import { PhpComponent } from '../components/php/php.component';
import { HttpClientComponent } from '../components/Httpclient/HtttpClient.component';
import { HttpClientTwoComponent } from '../components/Httpclient/Httpclient2.component';
import { AuthService } from '../Gurads/auth.service';
import { TwoinOneComponent } from '../components/twoin-one/twoin-one.component';
import { TwoinOneTargetComponent } from '../components/twoin-one-target/twoin-one-target.component';
import { InterceptorComponent } from '../components/interceptor/interceptor.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import {CallsComponent } from '../components/calls/calls.component';
import {MysqlComponent } from '../components/mysql/mysql.component';
import {PipeComponent } from '../pipes/pipe.Component';
import {PredifinedPipeComponent } from '../pipes/predefined.pipe';
import { ReversePipe } from '../pipes/usedefined.pipe';
import { ParentComponent } from '../components/Input/parent/parent.component';
import { InputComponent } from '../components/input/input.component';
import { ViewchildComponent } from '../components/viewchild/viewchild.component';
import { ViewchildrenComponent } from '../components/viewchildren/viewchildren.component';
import { FormsComponent } from '../components/forms/forms.component';
import { TdfComponent } from '../components/forms/tdf/tdf.component';
import { MdfComponent } from '../components/forms/mdf/mdf.component';
import { DirectivesComponent } from '../components/directives/directives.component';
import { PredifinedDierectivesComponent } from '../components/directives/predifined-dierectives/predifined-dierectives.component';
import { UserDirectivesComponent } from '../components/directives/user-directives/user-directives.component';
import {UtestComponent } from '../components/utest/utest.component';
import {LazyLoadingComponent } from '../components/lazyLoading/lazy.loading.component';
import { MongoDbComponent } from '../components/mongodb/mongoComponent';
import { ModuleWithProviders } from '@angular/core';
export const appRoutes: Routes = [
  { path: '', component: StaticFileComponent },
 { path: 'emp', component: EmployeeComponent, canDeactivate: [AuthService],
 children: [{path: 'list', component : ListEmployeesComponent },
 {path: 'create', component: CreateEmployeeComponent}]},
 {path : 'Calls', component : CallsComponent, children: [{ path: 'postService', component: PostComponent},
 { path: 'seriesCall', component:  SeriesServicesComponent}, { path: 'parllelCall', component:  ParllelComponent, canLoad: [AuthService]}]},
 {path : 'mysql', component: MysqlComponent, children: [{ path: 'mysqlCrud', component : NodemysqlComponent, canActivate: [AuthService]},
 { path: 'login', component: LoginComponent, canDeactivate: [AuthService]},
 ] },
 { path: 'php', component: PhpComponent},
 { path: 'httpclient', component : HttpClientTwoComponent , children: [{path: 'countries', component : HttpClientComponent}],
 canActivateChild: [AuthService]},
 { path: 'TwoinOne', component: TwoinOneComponent, children: [{path: 'child', component : TwoinOneTargetComponent}]},
  { path : 'interceptor', component: InterceptorComponent},
  {path : 'pipes', component: PipeComponent,
  children: [{path: 'predefined', component: PredifinedPipeComponent}]},
  {path: 'cms', component: InputComponent, children: [{path: 'IO', component: ParentComponent},
 {path: 'viewchild', component: ViewchildComponent}, {path: 'viewchildren', component: ViewchildrenComponent}]},
 {path: 'forms', component: FormsComponent, children: [ {path: 'TDF', component: TdfComponent}, {path: 'MDF', component: MdfComponent}]},
 {path: 'directive', component: DirectivesComponent, children: [ {path: 'predifined', component: PredifinedDierectivesComponent},
 {path: 'user', component: UserDirectivesComponent}]},
 {path: 'utest', component: UtestComponent},
 {path: 'lazy', component: LazyLoadingComponent},
 {path: 'mongo', component: MongoDbComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }

];
