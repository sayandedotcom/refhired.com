"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Button,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  TypographyH2,
  Separator,
  TypographyP,
  TypographySmall,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@referrer/ui";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const postSchema = z.object({
//   title: z
//     .string()
//     .nonempty("This field is required")
//     .max(250, { message: "Title must not be more than 250 characters." }),
//   description: z.string().nonempty("This field is required"),
//   jobType: z.string().nonempty("This field is required"),
//   skills: z.string().nonempty("This field is required"),
//   image: z.string().nonempty("This field is required"),
//   expiresAt: z.string().nonempty("This field is required"),
//   experience: z.string().nonempty("This field is required"),
//   location: z.string().nonempty("This field is required"),
//   startingRange: z.string().nonempty("This field is required"),
//   endingRange: z.string().nonempty("This field is required"),
//   tags: z.string().nonempty("This field is required"),
//   accept: z.string().nonempty("This field is required"),
// });

export function PostDialog({ children }: { children: React.ReactNode }) {
  // const form = useForm<z.infer<typeof postSchema>>({
  //   resolver: zodResolver(postSchema),
  //   defaultValues: {
  //     title: "",
  //     description: "",
  //   },
  // });

  // const onSubmit = async (values: z.infer<typeof postSchema>) => {};
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:w-[900px]">
        <DialogHeader>
          <DialogTitle>Post !</DialogTitle>
          <DialogDescription>Post</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            {/* <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card> */}
            <h1>account</h1>
          </TabsContent>
          <TabsContent value="password">
            {/* <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card> */}
            <h1>password</h1>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button className="w-32 rounded-full" type="submit">
            <p>Post</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

{
  /* <Dialog>
  <DialogTrigger asChild>{children}</DialogTrigger>
  <DialogContent className='md:w-[900px]'>
    <DialogHeader>
      <DialogTitle>Post !</DialogTitle>
      <DialogDescription>Post</DialogDescription>
    </DialogHeader>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 flex flex-col'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=''>Email address or Username</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Write title here.........'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel className=''>Password</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Write Description here.........'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='bg-[#0f172a] text-white hover:bg-[#0f172a]'
          type='submit'>
          Log In
        </Button>
      </form>
    </Form>
    <DialogFooter>
      <Button className='rounded-full w-32' type='submit'>
        <p>Post</p>
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog> */
}

{
  /* <div className='grid gap-4 py-4'>
  <div className='grid grid-cols-4 items-center gap-4'>
    <Label htmlFor='name' className='text-right'>
      Name
    </Label>
    <Textarea id='name' className='col-span-3' />
  </div>
  <div className='grid grid-cols-4 items-center gap-4'>
    <Label htmlFor='name' className='text-right'>
      Name
    </Label>
    <Input id='name' value='Pedro Duarte' className='col-span-3' />
  </div>
  <div className='grid grid-cols-4 items-center gap-4'>
    <Label htmlFor='username' className='text-right'>
      Username
    </Label>
    <Input id='username' value='@peduarte' className='col-span-3' />
  </div>
</div> */
}
