#include<stdio.h>
#include<math.h>

int add(int a, int c)
{
int  total;
total=a+c;
return total;
}
int sub(int a, int c)
{
int  diff;
diff=a-c;
return diff;
}
int mul(int a, int c)
{
int  lil;
lil=a*c;
return lil;
}
int di(int a, int c)
{
int  dil;
dil=a/c;
return dil;
}
double sur(int a)
{
double  lo;
lo=sqrt(a);
return lo;
}
double subl(int a)
{
double  kl;
kl=pow(a,2);
return kl;

}
int main()
{
int m,X,s,t,y;
double z;
printf("WELCOME TO INNOCENT MAYE CALCULATOR FEEL AT SERVICE\n");
printf("Choose function to be performed:\n");
printf("1... addition\n");
printf("2... subtraction\n");
printf("3... multiplication\n");
printf("4... division\n");
printf("5... square root\n");
printf("6... squire of numbers\n");
scanf("%d",&m);
switch (m)
{
case 1:

printf("Enter the numbers :\n");
scanf("%d%d",&X,&y);
z=add(X,y);
printf( "The sum is :%f",z);
break;
case 2:

printf("Enter the numbers :\n");
scanf("%d%d",&X,&y);
z=sub(X,y);
printf( "The difference is :%f",z);
break;
case 3:

printf("Enter the numbers :\n");
scanf("%d%d",&X,&y);
z=mul(X,y);
printf( "The producty is :%f",z);
break;
case 4:
printf("Enter the numbers :\n");
scanf("%d%d",&X,&y);
z=di(X,y);
printf( "The quotient is :%5.2f",z);
break;
case 5:
printf("Enter the numbers :\n");
scanf("%d",&X);
z=sur(X);
printf( "The square root is :%5.2f",z);
break;
case 6:
printf("Enter the numbers :\n");
scanf("%d",&X);
z=subl(X);
printf( "The square is :%5.2f",z);

break;

default:
printf("Invalid selection");
}


return 0;
}



    